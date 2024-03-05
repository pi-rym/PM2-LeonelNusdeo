console.log(tempData);

class Movie {
    constructor(id, title, year, director,duration, genre, rate, poster) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository {
    constructor() {
        this.movies = [];
    }

    // Debe instanciar una pelicula con los datos correspondientes y almacenarla en su arreglo.
    createMovie(newTitle, newYear, newDirector, newDuration, newGenre, newRate, newPoster) {
        const newId = (this.movies.length == 0) ? 1 : this.movies.at(-1).id + 1;
        const newMovie = new Movie(newId, newTitle, newYear, newDirector, newDuration, newGenre, newRate, newPoster);
        this.movies.push(newMovie);
    }

    // Debe retornar un arreglo con todas las peliculas.
    getAllMovies() {
        return this.movies;
    }

    // Debe recibir un id y filtrar el arreglo para eliminar la pelicula correspondiente.
    deleteMovie(deleteId) {
        const movieFound = this.movies.find(
            (movie) => movie.id == deleteId
        );
        this.movies = this.movies.filter(m => m.id != deleteId);
    };
};

function convertMovieDataToHtml(movie) {
    // Extraer sus propiedades en variables utilizando destructuring.
    const { id, title, director, duration, rate, poster } = movie;
    // Crear los elementos HTML que formarán parte de la tarjeta.
    const newATitle = document.createElement("a");
    const newImgPoster = document.createElement("img");
    const newPDirector = document.createElement("p");
    const newPDuration = document.createElement("p");
    const newPRate = document.createElement("p");
    // Asignar los valores a las propiedades correspondientes a cada uno de los elementos.
    newATitle.innerHTML = title;
    newImgPoster.src = poster;
    newImgPoster.alt = "Poster de Pelicula";
    newPDirector.innerHTML = director;
    newPDuration.innerHTML = duration;
    newPRate.innerHTML = rate;
    // newInputRate.setAttribute("type", "range");
    // Agregar a los elementos las clases CSS correspondientes.
    newATitle.classList.add("elementClass");
    newImgPoster.classList.add("elementClass");
    newPDirector.classList.add("elementClass");
    newPDuration.classList.add("elementClass");
    newPRate.classList.add("elementClass");
    // newInputRate.classList.add("elementClass");
    // Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.
    const newDiv = document.createElement("div");
    // Guardar el id de la activity en el dataset del div (para poder eliminar tarjeta).
    newDiv.dataset.activityId = id;
    // Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre ellas.
    // newDiv.addEventListener("click", deleteActivityHandler);
    // “Appendear” al nuevo <div> los elementos creados anteriormente .
    newDiv.appendChild(newATitle);
    newDiv.appendChild(newImgPoster);
    newDiv.appendChild(newPDirector);
    newDiv.appendChild(newPDuration);
    newDiv.appendChild(newPRate);
    // Asignar al <div> la clase CSS que tengas implementada para darle estilos.
    newDiv.classList.add("newDivClass");
    // Retornar el <div> finalizado con todos los elementos correspondientes dentro.
    return newDiv;
}

function convertRepositoryToHtml() {
    // Seleccionar el contenedor donde queremos agregar las peliculas.
    const movieContainer = document.getElementById("movieContainer");
    // Vaciar el contenido actual del contenedor.
    movieContainer.innerHTML = "";
    // Obtener el listado completo de peliculas de una instancia de Repository.
    const allMovies = repository.getAllMovies()
    // “Mapear” el listado de peliculas para convertirlos todos en elementos HTML.
    const allHtmlElements = allMovies.map((m) => convertMovieDataToHtml(m));
    // “Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado.
    allHtmlElements.forEach((elem) => movieContainer.appendChild(elem));
}

function getMovie(value, index, array) {
    // Seleccionar todos los datos de la fuente.
	const { title, year, director, duration, genre, rate, poster } = value;
    // Validar que estos valores estén completos.
    if (title === "" || year === "" || director === "" || duration === "" || genre === "" || rate === "" || poster === "") 
        return alert("Datos incompletos de la fuente.")
    // Llamar al método correspondiente de la instancia de Repository para crear una nueva pelicula.
    const newMovieByInput = repository.createMovie(title, year, director, duration, genre, rate, poster);
    // Invocar la función anterior para “refrescar” el contenedor de actividades.
    convertRepositoryToHtml();
}

// const deleteActivityHandler = () => {
//     // Necesito el <div> de donde clickeo 
//     // (si pongo target.remove() y clickeo en (por ejemplo) la imagen, borra el <img> pero no todo)
//     const deleteDiv = event.target.closest('.newDivClass');
//     // Obtener id de la activity a eliminar.
//     const deleteId = deleteDiv.dataset.activityId;
//     // Usar el metodo deleteActivity para borrarlo del repository.
//     repository.deleteActivity(deleteId);
//     // Eliminar el <div> del DOM
//     deleteDiv.remove();
// }

const repository = new Repository();
// “Mapear” el listado de peliculas de fuente (tempData) para convertirlo.
tempData.forEach(getMovie);



