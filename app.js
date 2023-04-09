const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menuButton');
const crossBtn = document.querySelector('.crossButton');



menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('showSidebar');
});

crossBtn.addEventListener('click', () => {
    sidebar.classList.remove('showSidebar')
})