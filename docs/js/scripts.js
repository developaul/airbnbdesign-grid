document.addEventListener( 'DOMContentLoaded', () => {
    const footer        = document.querySelector( '#footer' );

    // Botón Flotante
    const btnFlotante = document.querySelector( '.btn-flotante' );
    btnFlotante.addEventListener( 'click', event => {
        event.preventDefault();

        if( footer.classList.contains( 'activo' ) ) {
            // Ocultar el footer
            footer.classList.remove( 'activo' );
            btnFlotante.classList.remove( 'activo' );
            btnFlotante.textContent = 'Idioma y Moneda';
        } else {
            // Mostrar el footer
            footer.classList.add( 'activo' );
            btnFlotante.classList.add( 'activo' );
            btnFlotante.textContent = 'X Cerrar';
        }

    });
   
    
});
