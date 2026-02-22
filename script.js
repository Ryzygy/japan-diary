const cur = document.createElement('div');
cur.style.cssText = `
  position:fixed;width:9px;height:9px;background:#c8522a;
  pointer-events:none;z-index:9999;transform:translate(-50%,-50%);
  transition:width 0.15s,height 0.15s,opacity 0.15s;
`;
document.body.appendChild(cur);

document.addEventListener('mousemove', (e) => {
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
});

document.addEventListener('mouseover', (e) => {
    const t = e.target.closest(
        'a,button,img,.place-tile,.g-item,.tl-card,.food-row',
    );
    if (t) {
        cur.style.width = '18px';
        cur.style.height = '18px';
        cur.style.opacity = '0.5';
    } else {
        cur.style.width = '9px';
        cur.style.height = '9px';
        cur.style.opacity = '1';
    }
});

function initReveal() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('visible');
            });
        },
        { threshold: 0.1 },
    );

    document
        .querySelectorAll('.reveal, .tl-card')
        .forEach((el) => observer.observe(el));
}

initReveal();

const lb = document.getElementById('lb');
const lbImg = document.getElementById('lbImg');
const lbClose = document.getElementById('lbClose');

function openLb(src) {
    lbImg.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

lbClose.addEventListener('click', closeLb);
lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLb();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLb();
});

function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

//FOOTER YEAR
document.getElementById('yr').textContent = new Date().getFullYear();
