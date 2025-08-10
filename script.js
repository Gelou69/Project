const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('#nav-menu a');

items.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const rect = e.target.getBoundingClientRect();
        indicator.style.width = rect.width + 'px';
        indicator.style.left = e.target.offsetLeft + 'px';
    });
});

document.querySelector('#nav-menu').addEventListener('mouseleave', () => {
    indicator.style.width = '0';
});
