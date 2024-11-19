// JavaScript for fade-in effect when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const animals = document.querySelectorAll('.animal');
    animals.forEach((animal, index) => {
        animal.style.animation = `fadeIn 1s ease-out ${index * 0.3}s forwards`;
    });
});

// Example of header animation on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.transform = 'translateY(-10px)';
        header.style.transition = 'transform 0.3s ease';
    } else {
        header.style.transform = 'translateY(0)';
    }
});
// JavaScript to toggle the visibility of the content
document.addEventListener('DOMContentLoaded', function () {
    const titles = document.querySelectorAll('.toggle-title');
    
    titles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Toggle the active class
            this.classList.toggle('active');
            
            // If active, show the content; otherwise, hide it
            if (isActive) {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
