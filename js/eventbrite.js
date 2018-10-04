class Eventbrite {
    // creamos el constructor de nuesta clase
    constructor () {
        this.token_oauth = 'B27FPK3RNXLQNRJBDJVE';
        this.orden = 'date';
    }
    // metodo que obtiene las categorias de la api
    async obtenerCategorias() {
        // constante que tiene el fetch
        const enlaceCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_oauth}`);
        // constante que convierte las categorias en json
        const categorias = await enlaceCategorias.json();

        return {
            categorias
        }
    }
}