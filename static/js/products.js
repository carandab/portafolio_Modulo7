$(document).ready(function() {
    
    // Agregar al carrito con animacion
    $('.btn-success[href*="add_to_cart"]').on('click', function(e) {
        var button = $(this);
        var originalText = button.html();
        
        button.html('<i class="fas fa-spinner fa-spin me-2"></i>Agregando...');
        button.prop('disabled', true);
        
        // Permitir que el enlace se procese normalmente
    });
    
});