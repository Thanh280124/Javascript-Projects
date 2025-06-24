let position = document.documentElement;

position.addEventListener('mousemove', (e) => {
    position.style.setProperty('--1', e.clientX + 'px');
    position.style.setProperty('--2', e.clientY + 'px');
});