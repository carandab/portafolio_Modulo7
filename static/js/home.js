
$(document).ready(function() {
    
    // Scroll suave entre secciones
    $('.btn[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });
    
    // Animacion de agregar al carrito
    $('.btn-success').on('click', function(e) {
        var button = $(this);
        button.html('<i class="fas fa-check me-2"></i>Agregado!');
        
        setTimeout(function() {
            button.html('<i class="fas fa-cart-plus me-2"></i>Agregar al Carrito');
        }, 2000);
    });
    
    // Cargar imagenes lentamente en seccion de productos
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
