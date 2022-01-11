
const togglePopup = document.querySelectorAll('.popup');
const productPopup = document.querySelector('.product-popup');

function handlePopup(event){
    
        
        if (event.currentTarget.classList.contains('close-popup')){
            productPopup.style.display = 'none';
        } else {
            productPopup.style.display = 'flex';
        }
    
    
}

togglePopup.forEach(btn => {
    btn.addEventListener('mouseup', handlePopup)
})