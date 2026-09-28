// Misc section: rank screenshot popup, and a Heimerdinger turret that shoots the blur off each line
document.addEventListener('DOMContentLoaded', () => {
    const misc = document.getElementById('misc');
    if (!misc) return;

    // "Challenger" pops up small rank screenshots; without JS the link just opens the image
    const rankLink = misc.querySelector('.rank-link');
    const rankPop = misc.querySelector('.rank-pop');
    if (rankLink && rankPop) {
        const setOpen = (open) => {
            rankPop.classList.toggle('open', open);
            rankLink.setAttribute('aria-expanded', open);
            if (!open) return;

            // Keep the popup on screen: nudge it sideways, or drop it below the link if there's no room above
            const MARGIN = 8;
            rankPop.classList.remove('below');
            rankPop.style.setProperty('--shift', '0px');
            const rect = rankPop.getBoundingClientRect();
            let shift = 0;
            if (rect.left < MARGIN) shift = MARGIN - rect.left;
            else if (rect.right > window.innerWidth - MARGIN) shift = window.innerWidth - MARGIN - rect.right;
            rankPop.style.setProperty('--shift', `${shift}px`);
            if (rect.top < MARGIN) rankPop.classList.add('below');
        };

        rankLink.addEventListener('click', (event) => {
            event.preventDefault();
            setOpen(!rankPop.classList.contains('open'));
        });
        document.addEventListener('click', (event) => {
            if (event.target !== rankLink && !rankPop.contains(event.target)) setOpen(false);
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') setOpen(false);
        });
    }

    const turret = misc.querySelector('.turret');
    if (!turret) return;

    const svg = turret.querySelector('svg');
    const barrel = turret.querySelector('.turret-barrel');
    const hint = turret.querySelector('.turret-hint');
    const items = Array.from(misc.querySelectorAll('.misc-list li'));

    const HP = 2;         // hits needed to fully clear one line
    const VIEWBOX = 64;   // svg viewBox size
    const PIVOT = 32;     // barrel rotates around the head center, matches .turret-barrel transform-origin
    const BARREL = 25;    // pivot to muzzle distance (viewBox units)
    const SPEED = 0.9;    // bolt speed in px per ms
    const AIM_TIME = 150; // matches .turret-barrel transition

    // Blur is added here rather than in the HTML so the text stays readable without JS
    const lines = items.map((li) => ({ li, hp: 0, incoming: 0 }));
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        lines.forEach((line) => {
            line.hp = HP;
            line.li.style.setProperty('--hp', HP);
            line.li.classList.add('blurred');
        });
        turret.classList.add('armed');
    }

    turret.addEventListener('click', () => {
        // Next line that still needs hits beyond the bolts already in flight;
        // once everything is clear, just shoot a random line for fun
        const line = lines.find((l) => l.hp - l.incoming > 0)
            || lines[Math.floor(Math.random() * lines.length)];
        line.incoming += 1;

        // All positions are relative to the #misc card, where bolts are appended
        const box = misc.getBoundingClientRect();
        const svgBox = svg.getBoundingClientRect();
        const scale = svgBox.width / VIEWBOX;
        const pivotX = svgBox.left - box.left + PIVOT * scale;
        const pivotY = svgBox.top - box.top + PIVOT * scale;

        const liBox = line.li.getBoundingClientRect();
        const hitX = liBox.left - box.left + Math.min(liBox.width * 0.3, 160);
        const hitY = liBox.top - box.top + liBox.height / 2;

        const angle = Math.atan2(hitY - pivotY, hitX - pivotX);
        barrel.style.transform = `rotate(${angle}rad)`;

        setTimeout(() => {
            const startX = pivotX + Math.cos(angle) * BARREL * scale;
            const startY = pivotY + Math.sin(angle) * BARREL * scale;
            const distance = Math.hypot(hitX - startX, hitY - startY);

            svg.animate([
                { transform: 'translate(0, 0)' },
                { transform: `translate(${-Math.cos(angle) * 3}px, ${-Math.sin(angle) * 3}px)` },
                { transform: 'translate(0, 0)' },
            ], { duration: 120 });

            const bolt = document.createElement('div');
            bolt.className = 'bolt';
            misc.appendChild(bolt);
            const flight = bolt.animate([
                { transform: `translate(${startX}px, ${startY}px) rotate(${angle}rad)` },
                { transform: `translate(${hitX}px, ${hitY}px) rotate(${angle}rad)` },
            ], { duration: Math.max(distance / SPEED, 150), easing: 'linear' });

            flight.onfinish = () => {
                bolt.remove();
                hit(line, hitX, hitY);
            };
        }, AIM_TIME);
    });

    function hit(line, x, y) {
        const impact = document.createElement('div');
        impact.className = 'bolt-impact';
        misc.appendChild(impact);
        impact.animate([
            { transform: `translate(${x}px, ${y}px) scale(0.3)`, opacity: 1 },
            { transform: `translate(${x}px, ${y}px) scale(1.6)`, opacity: 0 },
        ], { duration: 400, easing: 'ease-out' }).onfinish = () => impact.remove();

        line.li.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(4px)' },
            { transform: 'translateX(-3px)' },
            { transform: 'translateX(0)' },
        ], { duration: 220 });

        line.incoming = Math.max(line.incoming - 1, 0);
        if (line.hp > 0) {
            line.hp -= 1;
            line.li.style.setProperty('--hp', line.hp);
            if (line.hp === 0) line.li.classList.remove('blurred');
        }

        if (lines.every((l) => l.hp === 0)) {
            turret.classList.remove('armed');
            hint.textContent = 'gg';
        } else {
            hint.textContent = 'keep going!';
        }
    }
});
