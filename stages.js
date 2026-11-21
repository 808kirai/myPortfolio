// ==========================================================================
// Project demos (Stageshow rules, plain JS)
// Each stage is designed at a fixed size and scaled to its column. A narrow
// column gets its own compact design, not a squeeze. The HTML is the poster:
// the finished frame people see with reduced motion or before a story plays.
// ==========================================================================

(function () {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

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
        if (src.hasAttribute('data-dark')) phone.setAttribute('data-dark', '');
        if (src.hasAttribute('data-follow-theme')) phone.setAttribute('data-follow-theme', '');

        // Bands: widest first, each a stroke centered on the screen's edge
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

    function syncPhoneThemes() {
        const dark = document.documentElement.getAttribute('data-theme') === 'dark';
        document.querySelectorAll('.ss-phone[data-follow-theme]').forEach(phone => {
            phone.toggleAttribute('data-dark', dark);
        });
    }

    // ----------------------------------------------------------------------
    // Fit: scale the design to the column, switching to compact when narrow
    // ----------------------------------------------------------------------

    function fit(box) {
        const stage = box.querySelector('.ss-stage');
        const avail = box.clientWidth;
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
    // Helpers for the stories
    // ----------------------------------------------------------------------

    const on = (node, yes = true) => node && node.toggleAttribute('data-on', yes);
    const open = (node, yes = true) => node && node.toggleAttribute('data-open', yes);
    const flag = (node, name, yes = true) => node && node.toggleAttribute(`data-${name}`, yes);

    // Lay every word out up front, so the text never reflows as it streams
    function splitWords(node) {
        const words = node.textContent.trim().split(/\s+/);
        node.textContent = '';
        return words.map((word, i) => {
            const span = el('span', 'w');
            span.textContent = word;
            span.setAttribute('data-on', '');
            node.appendChild(span);
            if (i < words.length - 1) node.appendChild(document.createTextNode(' '));
            return span;
        });
    }

    function setRoll(roll, n) {
        roll.firstElementChild.style.setProperty('--n', n);
    }

    // ----------------------------------------------------------------------
    // The four stories
    // ----------------------------------------------------------------------

    const DEMOS = {
        // A question typed and sent, Thinking, the answer streaming in, then
        // the page of the student's notes it came from
        rahah(stage) {
            const q = stage.querySelector('.rh-q-text').textContent;
            const composer = stage.querySelector('.rh-composer');
            const draft = stage.querySelector('.rh-draft');
            const send = stage.querySelector('.rh-send');
            const sent = stage.querySelector('[data-k="sent"]');
            const thinking = stage.querySelector('[data-k="thinking"]');
            const answer = stage.querySelector('[data-k="answer"]');
            const source = stage.querySelector('.rh-source');
            const words = splitWords(stage.querySelector('.rh-stream'));

            return {
                reset() {
                    draft.textContent = '';
                    flag(composer, 'typed', false);
                    flag(composer, 'focus', true);
                    open(sent, false);
                    open(thinking, false);
                    open(answer, false);
                    words.forEach(w => on(w, false));
                    on(source, false);
                },
                async play(wait) {
                    await wait(700);
                    flag(composer, 'typed');
                    for (const ch of q) {
                        draft.textContent += ch;
                        await wait(42);
                    }
                    await wait(400);
                    flag(send, 'pressed');
                    await wait(130);
                    flag(send, 'pressed', false);
                    draft.textContent = '';
                    flag(composer, 'typed', false);
                    flag(composer, 'focus', false);
                    open(sent);
                    await wait(550);
                    open(thinking);
                    await wait(1300);
                    open(thinking, false);
                    open(answer);
                    await wait(300);
                    for (const w of words) {
                        on(w);
                        await wait(55);
                    }
                    await wait(350);
                    on(source);
                }
            };
        },

        // A text for help, a reply in seconds, and a counselor on request
        amani(stage) {
            const bubbles = [...stage.querySelectorAll('.am-bubble')];
            const typing = [...stage.querySelectorAll('.am-typing')];
            const receipt = stage.querySelector('.am-receipt');

            return {
                reset() {
                    bubbles.forEach((b, i) => on(b, i === 0));
                    typing.forEach(t => on(t, false));
                    on(receipt, false);
                },
                async play(wait) {
                    await wait(900);
                    on(typing[0]);
                    await wait(1400);
                    on(typing[0], false);
                    on(bubbles[1]);
                    await wait(900);
                    on(bubbles[2]);
                    await wait(1500);
                    on(bubbles[3]);
                    await wait(450);
                    on(receipt);
                    await wait(800);
                    on(typing[1]);
                    await wait(1400);
                    on(typing[1], false);
                    on(bubbles[4]);
                }
            };
        },

        // Tap Read, the frame locks on, and the label is read aloud
        gemma(stage) {
            const touch = stage.querySelector('.touch');
            const read = stage.querySelector('.gs-mode--read');
            const reticle = stage.querySelector('.gs-reticle');
            const busy = stage.querySelector('.gs-busy');
            const caption = stage.querySelector('.gs-caption');
            const words = splitWords(stage.querySelector('.gs-text'));

            return {
                reset() {
                    on(touch, false);
                    flag(touch, 'pressed', false);
                    flag(read, 'active', false);
                    flag(reticle, 'lock', false);
                    on(busy, false);
                    on(caption, false);
                    flag(caption, 'speaking', false);
                    words.forEach(w => on(w, false));
                },
                async play(wait) {
                    await wait(800);
                    on(touch);
                    await wait(420);
                    flag(touch, 'pressed');
                    flag(read, 'pressed');
                    flag(read, 'active');
                    await wait(160);
                    flag(touch, 'pressed', false);
                    flag(read, 'pressed', false);
                    await wait(220);
                    on(touch, false);
                    flag(reticle, 'lock');
                    on(busy);
                    await wait(1400);
                    on(busy, false);
                    on(caption);
                    flag(caption, 'speaking');
                    await wait(250);
                    for (const w of words) {
                        on(w);
                        await wait(150);
                    }
                    await wait(500);
                    flag(caption, 'speaking', false);
                }
            };
        },

        // Warm areas boxed one by one, each logged as it lands, all offline
        neuse(stage) {
            const boxes = [...stage.querySelectorAll('.nx-box')];
            const rows = [...stage.querySelectorAll('[data-k^="row"]')];
            const roll = stage.querySelector('.roll');
            const saved = stage.querySelector('.nx-saved');

            return {
                reset() {
                    boxes.forEach(b => on(b, false));
                    rows.forEach(r => open(r, false));
                    setRoll(roll, 0);
                    on(saved, false);
                },
                async play(wait) {
                    await wait(900);
                    on(boxes[0]);
                    await wait(380);
                    open(stage.querySelector('[data-k="row1"]'));
                    setRoll(roll, 1);
                    await wait(1300);
                    on(boxes[1]);
                    await wait(380);
                    open(stage.querySelector('[data-k="row2"]'));
                    setRoll(roll, 2);
                    await wait(900);
                    on(saved);
                }
            };
        }
    };

    // ----------------------------------------------------------------------
    // Playback: once, as each stage scrolls into view; replay on request
    // ----------------------------------------------------------------------

    function snap(stage, fn) {
        stage.setAttribute('data-snap', '');
        fn();
        void stage.offsetHeight;
        stage.removeAttribute('data-snap');
    }

    async function play(box) {
        const demo = box._demo;
        if (!demo) return;
        if (box._token) box._token.cancelled = true;
        const token = { cancelled: false };
        box._token = token;
        box.removeAttribute('data-done');

        const stage = box.querySelector('.ss-stage');
        snap(stage, () => demo.reset());

        const wait = ms => new Promise((resolve, reject) => {
            setTimeout(() => (token.cancelled ? reject(new Error('cancelled')) : resolve()), ms);
        });

        try {
            await demo.play(wait);
            if (!token.cancelled) box.setAttribute('data-done', '');
        } catch (e) { /* replaced by a newer run */ }
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

    function init() {
        document.querySelectorAll('.phone-src').forEach(buildPhone);
        syncPhoneThemes();
        document.addEventListener('themechange', syncPhoneThemes);

        const boxes = [...document.querySelectorAll('.stage-fit[data-demo]')];
        boxes.forEach(box => {
            fit(box);
            const make = DEMOS[box.dataset.demo];
            if (make) box._demo = make(box.querySelector('.ss-stage'));

            const project = box.closest('.project');
            const replay = project && project.querySelector('.replay');
            if (replay) replay.addEventListener('click', () => play(box));
        });

        if ('ResizeObserver' in window) {
            const ro = new ResizeObserver(entries => entries.forEach(entry => fit(entry.target)));
            boxes.forEach(box => ro.observe(box));
        } else {
            window.addEventListener('resize', () => boxes.forEach(fit));
        }

        // ?seek=4000 shows every story as it stands 4s in, settled, for review
        const seek = /[?&]seek=(\d+)/.exec(location.search);
        if (seek) {
            boxes.forEach(box => seekTo(box, Number(seek[1])));
            return;
        }

        // ?autoplay plays every story at once, for checking frames mid-story
        if (/[?&]autoplay\b/.test(location.search)) {
            boxes.forEach(box => play(box));
            return;
        }

        // A screenshot or reduced motion keeps the poster: the finished frame
        const posterOnly = reduceMotion.matches || /[?&]poster\b/.test(location.search);
        if (posterOnly) {
            boxes.forEach(box => box.setAttribute('data-done', ''));
            return;
        }

        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    io.unobserve(entry.target);
                    play(entry.target);
                });
            }, { threshold: 0.55 });
            boxes.forEach(box => io.observe(box));
        }
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
