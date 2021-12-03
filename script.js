
const header = document.querySelector('header');
const themeButton = document.querySelector('.theme-Button');
const navBar = document.querySelectorAll('.nav-bar');
const footer = document.querySelector('footer');

function handleToggle (){
    if (themeButton.checked === true) {
        navBar.forEach((nB)=>{nB.style.backgroundColor = 'var(--dark-nav-back)'});
        header.style.backgroundColor = 'var(--dark-back)';
        footer.style.backgroundColor = 'var(--dark-back)';
    } else {
        navBar.forEach((nB)=>{nB.style.backgroundColor = 'var(--nav-back)'});
        header.style.backgroundColor = 'var(--back)';
        footer.style.backgroundColor = 'var(--back)';
    }
};

themeButton.addEventListener('click',handleToggle);
