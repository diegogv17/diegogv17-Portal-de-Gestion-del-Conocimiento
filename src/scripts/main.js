document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar-content a');
    const sections = document.querySelectorAll('section');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').replace('#', '');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                sections.forEach(sec => sec.classList.remove('fade-in'));
                sections.forEach(sec => sec.classList.add('fade-out'));
                
                setTimeout(() => {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    sections.forEach(sec => sec.classList.remove('fade-out'));
                    targetSection.classList.add('fade-in');
                }, 300);
            }
        });
    });
});