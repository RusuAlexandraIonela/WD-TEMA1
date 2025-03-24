document.addEventListener('DOMContentLoaded', () => {

    const gameCards = document.querySelectorAll('.game-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    gameCards.forEach(card => {
        observer.observe(card);
        card.style.opacity = '0';
    });

    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const genre = tag.dataset.genre;
            tag.classList.toggle('active');
            
           
            tag.style.transform = 'scale(1.1)';
            setTimeout(() => {
                tag.style.transform = 'scale(1)';
            }, 200);

           
         
            console.log(`Selected genre: ${genre}`);
        });
    });


    gameCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});