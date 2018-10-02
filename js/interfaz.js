class Interfaz {

    constructor() {
        // ejecutamos el contenedor de las demas instancias
        this.init();
        // hacemos parte del objeto al contenedor de los resultados
        this.listado = document.getElementById('resultado-eventos');
    }
    // metodo que se inicializara cuando instanciemos la interfaz
    init() {

    }
    // metodo que obtenga las categorias de la API
    imprimirCategorias() {
        const listaCategorias = brite.obtenerCategorias();
    }
}