// ==========================================================================
// Project showcase (Stageshow rules, plain JS)
// Each stage is designed at a fixed size, scaled to its column, with its
// own compact design on phones. The HTML is the poster: the finished frame
// seen with reduced motion, before a story plays, or while swiping past.
// ==========================================================================

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const params = location.search;
    const HOLD = 2600;   // how long a finished story stays before the next one

    // ----------------------------------------------------------------------
    // Phone: the kit's iPhone frame (402 × 874pt screen, continuous corners,
    // a titanium band drawn as strokes of the screen's own outline)
    // ----------------------------------------------------------------------

    const SCREEN = { w: 402, h: 874, r: 64 };
    const CORNER = { a: 71, n: 2.31 };
    const BAND = 3;
    const GLASS = 10;
    const EDGE = BAND + GLASS;
    const SVG = 'http://www.w3.org/2000/svg';
    let phoneId = 0;

    function superellipsePath(w, h, a, n) {
        const steps = 32;
        const e = 2 / n;
        const pts = [];
        const corners = [[w - a, a, 1, -1], [w - a, h - a, 1, 1], [a, h - a, -1, 1], [a, a, -1, -1]];
        corners.forEach(([cx, cy, sx, sy], c) => {
            for (let i = 0; i <= steps; i++) {
                const t = (i / steps) * (Math.PI / 2);
                const u = c % 2 === 0 ? Math.sin(t) : Math.cos(t);
                const v = c % 2 === 0 ? Math.cos(t) : Math.sin(t);
                pts.push(`${(cx + sx * a * Math.pow(u, e)).toFixed(2)} ${(cy + sy * a * Math.pow(v, e)).toFixed(2)}`);
            }
        });
        return `M${pts.join('L')}Z`;
    }

    function el(tag, className) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        return node;
    }

    function svgEl(tag, attrs) {
        const node = document.createElementNS(SVG, tag);
        Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
        return node;
    }

    const GLYPHS =
        '<svg viewBox="0 0 20.33 13.67" width="20.33" height="13.67">' +
        [6.33, 8.67, 11, 13.67].map((h, i) => `<rect x="${i * 5.667}" y="${13.67 - h}" width="3.333" height="${h}" rx="1.667" fill="currentColor"/>`).join('') +
        '</svg>' +
        '<svg viewBox="0 0 19.33 14.33" width="19.33" height="14.33"><path fill-rule="evenodd" fill="currentColor" d="M0.416 5.543C0.902 6.044 1.66 5.958 2.275 5.414C4.306 3.581 6.837 2.635 9.669 2.635C12.501 2.635 15.046 3.609 17.063 5.414C17.664 5.973 18.422 6.03 18.922 5.543C19.423 5.027 19.494 4.254 18.979 3.71C16.834 1.518 13.33 0 9.669 0C6.008 0 2.49 1.533 0.359 3.724C-0.156 4.254 -0.099 5.027 0.416 5.557ZM3.948 9.138C4.506 9.682 5.221 9.625 5.851 9.109C6.88 8.293 8.253 7.734 9.669 7.749C11.071 7.749 12.444 8.293 13.488 9.123C14.117 9.639 14.861 9.668 15.404 9.123C15.933 8.579 16.019 7.749 15.461 7.233C14.074 5.987 11.986 5.113 9.683 5.113C7.381 5.113 5.278 5.987 3.906 7.233C3.419 7.691 3.319 8.479 3.963 9.138ZM8.725 13.893C9.34 14.48 9.984 14.48 10.599 13.893L11.757 12.776C12.372 12.174 12.501 11.415 11.8 10.9C11.214 10.484 10.47 10.212 9.669 10.212C8.868 10.212 8.11 10.484 7.538 10.914C6.837 11.415 6.98 12.189 7.595 12.776Z"/></svg>' +
        '<svg viewBox="0 0 29.33 13.67" width="29.33" height="13.67"><rect x="0" y="0" width="26.33" height="13.67" rx="4.3" fill="currentColor"/><path fill="currentColor" transform="translate(27.33 4.33)" d="M0 0L0 5C0.6 4.86 2 3.75 2 2.5C2 1.25 0.6 0.14 0 0Z"/></svg>';

    function buildPhone(src) {
        const width = Number(src.dataset.width);
        const s = width / (SCREEN.w + EDGE * 2);
        const pt = n => n * s;
        const id = `ph${phoneId++}`;
        const outline = superellipsePath(pt(SCREEN.w), pt(SCREEN.h), pt(CORNER.a), CORNER.n);

        const phone = el('div', `ss-phone ${src.className.replace('phone-src', '').trim()}`);
        phone.style.width = `${width}px`;
        phone.style.height = `${pt(SCREEN.h + EDGE * 2)}px`;
        phone.style.padding = `${pt(BAND)}px`;
        phone.style.borderRadius = `${pt(SCREEN.r + EDGE)}px`;
        phone.style.setProperty('--ps', `${s}px`);

        const bands = svgEl('svg', { class: 'ss-phone__bands', width: '100%', height: '100%', 'aria-hidden': 'true' });
        const defs = svgEl('defs', {});
        const grad = svgEl('linearGradient', { id: `${id}-band`, x1: '0.2', y1: '0', x2: '0.8', y2: '1' });
        [0, 0.22, 0.48, 0.74, 1].forEach((o, i) => {
            grad.appendChild(svgEl('stop', { offset: o, style: `stop-color: var(--ss-phone-band-${i + 1})` }));
        });
        defs.appendChild(grad);
        bands.appendChild(defs);
        const g = svgEl('g', { transform: `translate(${pt(EDGE)} ${pt(EDGE)})`, 'stroke-linejoin': 'round' });
        [[13, `url(#${id}-band)`], [10, 'var(--ss-phone-rim)'], [9.25, 'var(--ss-phone-glass)']].forEach(([d, paint]) => {
            const path = svgEl('path', { d: outline, fill: 'none', 'stroke-width': pt(d * 2) });
            if (paint.startsWith('url')) path.setAttribute('stroke', paint);
            else path.style.stroke = paint;
            g.appendChild(path);
        });
        bands.appendChild(g);
        phone.appendChild(bands);

        const glass = el('div', 'ss-phone__glass');
        glass.style.padding = `${pt(GLASS)}px`;
        glass.style.borderRadius = `${pt(SCREEN.r + GLASS)}px`;

        const win = el('div', 'ss-phone__window');
        win.style.width = `${pt(SCREEN.w)}px`;
        win.style.height = `${pt(SCREEN.h)}px`;
        win.style.clipPath = `path('${outline}')`;

        const screen = el('div', 'ss-phone__screen');
        screen.style.transform = `scale(${s})`;

        const status = el('div', 'ss-phone__status');
        const time = el('span', 'ss-phone__time');
        time.textContent = '9:41';
        const glyphs = el('span', 'ss-phone__glyphs');
        glyphs.innerHTML = GLYPHS;
        status.append(time, glyphs);

        const content = el('div', 'ss-phone__content');
        while (src.firstChild) content.appendChild(src.firstChild);

        screen.append(status, el('span', 'ss-phone__island'), content, el('span', 'ss-phone__home'));
        win.appendChild(screen);
        glass.appendChild(win);
        phone.appendChild(glass);
        src.replaceWith(phone);
        return phone;
    }

    // ----------------------------------------------------------------------
    // Fit: scale the design to the column, switching to compact when narrow
    // ----------------------------------------------------------------------

    function fit(box) {
        const stage = box.querySelector('.ss-stage');
        const avail = box.clientWidth;
        if (!avail) return;
        const compact = box.dataset.cw && avail < Number(box.dataset.below || 560);
        const w = Number(compact ? box.dataset.cw : box.dataset.w);
        const h = Number(compact ? box.dataset.ch : box.dataset.h);
        const s = Math.min(1, avail / w);
        stage.style.width = `${w}px`;
        stage.style.height = `${h}px`;
        stage.style.left = `${Math.max(0, (avail - w * s) / 2)}px`;
        stage.style.transform = `scale(${s})`;
        stage.dataset.layout = compact ? 'compact' : 'wide';
        box.style.height = `${h * s}px`;
    }

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    const on = (node, yes = true) => node && node.toggleAttribute('data-on', yes);
    const open = (node, yes = true) => node && node.toggleAttribute('data-open', yes);
    const flag = (node, name, yes = true) => node && node.toggleAttribute(`data-${name}`, yes);

    // Wrap every word of a block in a span, keeping inline markup like <strong>,
    // so the text is laid out once and streams in without reflowing
    function wrapWords(root) {
        const words = [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const texts = [];
        while (walker.nextNode()) texts.push(walker.currentNode);
        texts.forEach(node => {
            if (!node.textContent.trim()) return;
            const frag = document.createDocumentFragment();
            node.textContent.split(/(\s+)/).forEach(part => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                    frag.appendChild(document.createTextNode(part));
                } else {
                    const span = el('span', 'w');
                    span.textContent = part;
                    span.setAttribute('data-on', '');
                    frag.appendChild(span);
                    words.push(span);
                }
            });
            node.replaceWith(frag);
        });
        return words;
    }

    // ----------------------------------------------------------------------
    // The four stories
    // ----------------------------------------------------------------------

    const DEMOS = {
        // A question typed and sent, routed from General study to Science,
        // and the answer streaming in, in Rahah's own chat
        rahah(stage) {
            const q = stage.querySelector('.rh-q-text').textContent;
            const compose = stage.querySelector('.rh-compose');
            const draft = stage.querySelector('.rh-draft');
            const send = stage.querySelector('.rh-send');
            const hello = stage.querySelector('.rh-hello');
            const sent = stage.querySelector('[data-k="sent"]');
            const answer = stage.querySelector('[data-k="answer"]');
            const subject = stage.querySelector('[data-k="subject"]');
            const words = wrapWords(stage.querySelector('.rh-a'));

            return {
                reset() {
                    draft.textContent = '';
                    flag(compose, 'typed', false);
                    flag(compose, 'focus', true);
                    flag(hello, 'gone', false);
                    open(sent, false);
                    open(answer, false);
                    on(subject, false);
                    words.forEach(w => on(w, false));
                },
                async play(wait) {
                    await wait(700);
                    flag(compose, 'typed');
                    for (const ch of q) {
                        draft.textContent += ch;
                        await wait(40);
                    }
                    await wait(380);
                    flag(send, 'pressed');
                    await wait(130);
                    flag(send, 'pressed', false);
                    draft.textContent = '';
                    flag(compose, 'typed', false);
                    flag(compose, 'focus', false);
                    flag(hello, 'gone');
                    open(sent);
                    await wait(650);
                    on(subject);
                    await wait(750);
                    open(answer);
                    await wait(300);
                    for (const w of words) {
                        on(w);
                        await wait(45);
                    }
                }
            };
        },

        // A text, a self-help reply, a CALL, and the case opening for the counselor
        amani(stage) {
            const msgs = [...stage.querySelectorAll('.am-msg')];
            const boards = [...stage.querySelectorAll('.am-board')];

            return {
                reset() {
                    msgs.forEach(m => on(m, false));
                    boards.forEach(b => flag(b, 'case', false));
                },
                async play(wait) {
                    await wait(700);
                    on(msgs[0]);
                    await wait(1100);
                    on(msgs[1]);
                    await wait(1700);
                    on(msgs[2]);
                    await wait(900);
                    on(msgs[3]);
                    await wait(800);
                    boards.forEach(b => flag(b, 'case'));
                    await wait(600);
                }
            };
        },

        // Tap Read, the frame is checked, and the label is said aloud
        gemma(stage) {
            const touch = stage.querySelector('.touch');
            const read = stage.querySelector('.gs-mode--read');
            const busy = stage.querySelector('.gs-busy');
            const ready = stage.querySelector('[data-k="ready"]');
            const looking = stage.querySelector('[data-k="looking"]');
            const result = stage.querySelector('[data-k="result"]');
            const voice = stage.querySelector('.gs-voice');
            const resultWords = wrapWords(result);
            const saidWords = wrapWords(stage.querySelector('.gs-said'));

            return {
                reset() {
                    on(touch, false);
                    flag(touch, 'pressed', false);
                    flag(read, 'active', false);
                    on(busy, false);
                    on(ready, true);
                    on(looking, false);
                    on(result, false);
                    resultWords.forEach(w => on(w, false));
                    saidWords.forEach(w => on(w, false));
                    flag(voice, 'speaking', false);
                },
                async play(wait) {
                    await wait(800);
                    on(touch);
                    await wait(420);
                    flag(touch, 'pressed');
                    flag(read, 'pressed');
                    flag(read, 'active');
                    await wait(150);
                    flag(touch, 'pressed', false);
                    flag(read, 'pressed', false);
                    await wait(250);
                    on(touch, false);
                    on(ready, false);
                    on(looking);
                    on(busy);
                    await wait(1600);
                    on(busy, false);
                    on(looking, false);
                    on(result);
                    flag(voice, 'speaking');
                    for (let i = 0; i < resultWords.length; i++) {
                        on(resultWords[i]);
                        on(saidWords[i]);
                        await wait(150);
                    }
                    await wait(450);
                    flag(voice, 'speaking', false);
                }
            };
        },

        // A new alert lands, its cluster is ringed on the map, the count rolls
        neuse(stage) {
            const alert = stage.querySelector('[data-k="alert"]');
            const ring = stage.querySelector('.nx-ring');
            const count = stage.querySelector('[data-k="count"]');

            return {
                reset() {
                    open(alert, false);
                    on(ring, false);
                    on(count, false);
                },
                async play(wait) {
                    await wait(1100);
                    open(alert);
                    await wait(380);
                    on(ring);
                    on(count);
                    await wait(1800);
                }
            };
        }
    };

    // ----------------------------------------------------------------------
    // Running a story
    // ----------------------------------------------------------------------

    function snap(stage, fn) {
        stage.setAttribute('data-snap', '');
        fn();
        void stage.offsetHeight;
        stage.removeAttribute('data-snap');
    }

    function stop(box) {
        if (box._token) box._token.cancelled = true;
        box._token = null;
    }

    async function play(box) {
        const demo = box._demo;
        if (!demo) return false;
        stop(box);
        const token = { cancelled: false };
        box._token = token;
        const stage = box.querySelector('.ss-stage');
        snap(stage, () => demo.reset());
        const wait = ms => new Promise((resolve, reject) => {
            setTimeout(() => (token.cancelled ? reject(new Error('cancelled')) : resolve()), ms);
        });
        try {
            await demo.play(wait);
            return !token.cancelled;
        } catch (e) {
            return false;
        }
    }

    // Show the finished frame by replaying the story on a clock that never
    // waits, which also measures how long the story runs
    function poster(box) {
        stop(box);
        const stage = box.querySelector('.ss-stage');
        stage.setAttribute('data-snap', '');
        box._demo.reset();
        let total = 0;
        return box._demo.play(ms => { total += ms; return Promise.resolve(); }).finally(() => {
            box._length = total;
            void stage.offsetHeight;
            stage.removeAttribute('data-snap');
        });
    }

    async function seekTo(box, at) {
        const stage = box.querySelector('.ss-stage');
        stage.setAttribute('data-snap', '');
        box._demo.reset();
        let clock = 0;
        const wait = ms => {
            clock += ms;
            return clock <= at ? Promise.resolve() : Promise.reject(new Error('seek'));
        };
        try { await box._demo.play(wait); } catch (e) { /* stopped at the seek point */ }
    }

    // ----------------------------------------------------------------------
    // The showcase: tabs, a swipeable track, one story at a time
    // ----------------------------------------------------------------------

    function showcase(root, boxes) {
        const track = root.querySelector('[data-track]');
        const tabs = [...root.querySelectorAll('[role="tab"]')];
        const slides = [...track.children];
        const still = reduceMotion.matches || /[?&]poster\b/.test(params);
        let index = 0;
        let auto = !still;
        let visible = false;
        let advanceTimer = 0;
        let run = 0;

        const pitch = () => slides[0].offsetWidth + parseFloat(getComputedStyle(track).columnGap || 0);

        function select(i) {
            tabs.forEach((tab, n) => {
                const selected = n === i;
                tab.setAttribute('aria-selected', String(selected));
                tab.tabIndex = selected ? 0 : -1;
                tab.removeAttribute('data-running');
            });
        }

        async function start(i) {
            clearTimeout(advanceTimer);
            boxes.forEach((box, n) => { if (n !== i) poster(box); });
            const box = slides[i].querySelector('.stage-fit');
            const tab = tabs[i];
            if (still || !visible) {
                poster(box);
                return;
            }
            const mine = ++run;
            tab.style.setProperty('--run', `${(box._length || 6000) + (auto ? HOLD : 0)}ms`);
            tab.removeAttribute('data-running');
            void tab.offsetWidth;
            tab.setAttribute('data-running', '');
            const finished = await play(box);
            if (!finished || mine !== run) return;
            if (auto) {
                advanceTimer = setTimeout(() => {
                    if (auto && visible && mine === run) go((i + 1) % slides.length);
                }, HOLD);
            }
        }

        function activate(i) {
            if (i === index && tabs[i].hasAttribute('data-running')) return;
            index = i;
            select(i);
            start(i);
        }

        function go(i) {
            track.scrollTo({ left: i * pitch(), behavior: still ? 'auto' : 'smooth' });
            // Browsers without scrollend still land here
            if (!('onscrollend' in window)) setTimeout(() => settle(), 500);
        }

        function settle() {
            const i = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / pitch())));
            if (i !== index || !tabs[i].hasAttribute('data-running')) activate(i);
        }

        // Taking control stops the automatic advance; the stories still play
        function takeOver() {
            auto = false;
            clearTimeout(advanceTimer);
        }

        tabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                takeOver();
                if (i === index) start(i);
                else go(i);
            });
            tab.addEventListener('keydown', e => {
                const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
                if (!dir) return;
                e.preventDefault();
                takeOver();
                const next = (index + dir + slides.length) % slides.length;
                tabs[next].focus();
                go(next);
            });
        });

        track.addEventListener('pointerdown', takeOver, { passive: true });
        track.addEventListener('wheel', e => { if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) takeOver(); }, { passive: true });

        if ('onscrollend' in window) {
            track.addEventListener('scrollend', settle);
        } else {
            let t = 0;
            track.addEventListener('scroll', () => { clearTimeout(t); t = setTimeout(settle, 140); }, { passive: true });
        }

        // Keep the same slide in view when the column changes width
        window.addEventListener('resize', () => { track.scrollLeft = index * pitch(); });

        if ('IntersectionObserver' in window) {
            new IntersectionObserver(entries => {
                const nowVisible = entries[0].isIntersecting;
                if (nowVisible === visible) return;
                visible = nowVisible;
                if (visible) {
                    start(index);
                } else {
                    run++;
                    clearTimeout(advanceTimer);
                    boxes.forEach(stop);
                    tabs.forEach(tab => tab.removeAttribute('data-running'));
                }
            }, { threshold: 0.45 }).observe(track);
        }

        select(0);
    }

    // ----------------------------------------------------------------------
    // Start
    // ----------------------------------------------------------------------

    function init() {
        document.querySelectorAll('.phone-src').forEach(buildPhone);

        const boxes = [...document.querySelectorAll('.stage-fit[data-demo]')];
        boxes.forEach(box => {
            fit(box);
            const make = DEMOS[box.dataset.demo];
            if (make) {
                box._demo = make(box.querySelector('.ss-stage'));
                box._ready = poster(box);
            }
        });

        if ('ResizeObserver' in window) {
            const ro = new ResizeObserver(entries => entries.forEach(entry => fit(entry.target)));
            boxes.forEach(box => ro.observe(box));
        } else {
            window.addEventListener('resize', () => boxes.forEach(fit));
        }

        // ?seek=4000 shows every story as it stands 4s in, settled, for review
        const seek = /[?&]seek=(\d+)/.exec(params);
        if (seek) {
            Promise.all(boxes.map(box => box._ready)).then(() => {
                boxes.forEach(box => seekTo(box, Number(seek[1])));
                const slide = /[?&]slide=(\d)/.exec(params);
                const track = document.querySelector('[data-track]');
                if (slide && track) track.scrollLeft = Number(slide[1]) * (track.children[0].offsetWidth + 24);
            });
            return;
        }

        const root = document.querySelector('[data-showcase]');
        if (root) showcase(root, boxes);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
