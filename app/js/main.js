const openingBtns = document.querySelectorAll('.team-member__story-btn');

openingBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('change');
        btn.nextElementSibling.classList.toggle('change');
    });
});