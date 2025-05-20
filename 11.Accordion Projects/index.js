const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const btn = item.querySelector('.btn');
    const content = item.querySelector('.accordion-content');

    btn.addEventListener('click', () => {
        accordionItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.querySelector('.accordion-content').classList.remove('active');
                otherItem.querySelector('.btn').classList.remove('active');
            }
        });
      
        btn.classList.toggle('active');
        content.classList.toggle('active');
    });
});