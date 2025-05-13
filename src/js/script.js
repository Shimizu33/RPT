document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.hero-carousel-item');
    let currentItem = 0;
    
    function showNextItem() {
        carouselItems[currentItem].classList.remove('active');
        
        currentItem = (currentItem + 1) % carouselItems.length;
        
        carouselItems[currentItem].classList.add('active');
    }
    
    setInterval(showNextItem, 8000);
});