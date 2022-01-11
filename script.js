
const header = document.querySelector('header');
const themeButton = document.querySelector('.theme-Button');
const navBar = document.querySelectorAll('.nav-bar');
const footer = document.querySelector('footer');
const label = document.querySelector('label');

function handleBg (){
    if (themeButton.checked === true) {
        navBar.forEach((nB)=>{nB.style.backgroundColor = 'var(--dark-nav-back)'});
        header.style.backgroundColor = 'var(--dark-back)';
        footer.style.backgroundColor = 'var(--dark-back)';
        label.style.color = 'white';
    } else {
        navBar.forEach((nB)=>{nB.style.backgroundColor = 'var(--nav-back)'});
        header.style.backgroundColor = 'var(--back)';
        footer.style.backgroundColor = 'var(--back)';
        label.style.color = 'black';
    }
};

themeButton.addEventListener('click',handleBg);