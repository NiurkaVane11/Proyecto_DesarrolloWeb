document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#barra_superior_nav a');
    
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 100;
        
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});