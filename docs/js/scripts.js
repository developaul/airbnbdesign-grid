document.addEventListener( 'DOMContentLoaded', () => {
    const footer        = document.querySelector( '#footer' ),
          imagenHero    = document.querySelector( '.hero' );
    
    // Inicializar variables
    let i = 0, tiempo = 0;

    // Arreglo con imagenes de fondo
    const imagenes = [ 'arriba2.jpg', 'arriba.jpg' ];
    

    setInterval( () => {
        imagenHero.style.backgroundPositionY = `-${ tiempo }px`;

        if( tiempo > 35 ) {
            tiempo = 0;
            
            imagenHero.style.backgroundImage = `url( ../img/${ imagenes[i] } )`;
            
            if( i === imagenes.length - 1 ) {
                i = 0;
            } else {
                i++;
            }
        }

        tiempo++;
    }, 100 );

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
