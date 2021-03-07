const toggle_btn1 = document.querySelector('.toggle-btn');
const toggle_btn2 = document.querySelector('.s-screen-toggle-btn');

const nav = document.querySelector('.nav');

const nav_contents = document.querySelector('.nav-contents');


toggle_btn1.addEventListener('click', () => {
    nav.classList.toggle('nav-show');
})

toggle_btn2.addEventListener('click', () => {
    nav.classList.toggle('nav-show');
    toggle_btn2.classList.toggle('s-screen-toggle-btn-clicked');
})

nav_contents.addEventListener('click', (event) => {
    if (event.target.id == 'mywork') {
        event.target.classList.toggle('clicked');
        var mywork_contents = event.target.parentNode.querySelector('.mywork-contents');
        mywork_contents.classList.toggle('sub-contents-show');
    }
})