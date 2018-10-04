class Interfaz {

    constructor() {
        // ejecutamos el contenedor de las demas instancias
        this.init();
        // hacemos parte del objeto al contenedor de los resultados
        this.listado = document.getElementById('resultado-eventos');
    }
    // metodo que se inicializara cuando instanciemos la interfaz
    init() {
        this.imprimirCategorias();
    }
    // metodo que obtenga las categorias de la API
    imprimirCategorias() {
        const listaCategorias = brite.obtenerCategorias()
            .then(categorias => {
                // guaramos la respuesta en una constante
                const cats = categorias.categorias.categories;
                console.log(cats);
                // obtenemos el select del html 
                const select = document.querySelector('#listado-categorias');
                // llenamos el select con los datos del json con un foreach
                cats.forEach(cate => {
                    // creamos el option
                    const option = document.createElement('option');
                    option.value = cate.id;
                    option.appendChild(document.createTextNode(cate.name));
                    select.appendChild(option);
                });
            })
    }
}