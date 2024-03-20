function validateForm() {
    const form = document.getElementById("addMovieForm");

    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    });
}

function clearForm() {
    const clearButton = document.getElementById("clearFormButton")

    clearButton.addEventListener('click', event => {
        event.preventDefault();
        const form = document.getElementById("addMovieForm");
        form.reset();
    })

}

const setMovieHandler = () => {
    // Seleccionar los inputs de title, description e imgUrl.
    const titleInput = document.getElementById("titleInput");
    const yearInput = document.getElementById("yearInput");
    const directorInput = document.getElementById("directorInput");
    const durationInput = document.getElementById("durationInput");
    const genreInput = document.getElementById("genreInput");
    const rateInput = document.getElementById("rateInput");
    const posterInput = document.getElementById("posterInput");
    // Tomar los valores ingresados en los inputs y guardarlos en variables.
    const title = titleInput.value;
    const year = parseInt(yearInput.value);
    const director = directorInput.value;
    const duration = durationInput.value;
    const genre = genreInput.value.split(', ');
    const rate = parseFloat(rateInput.value);
    const poster = posterInput.value;
    // Validar que estos valores estén completos.
    if(!title || !year || !director || !duration || !genre || !rate || !poster) {
        return alert("Datos incompletos. Por favor ingrese todos los campos.");
    } else {
        const movie = { title, year, director, duration, genre, rate, poster };
        console.log(movie);
        return alert("Pelicula creada correctamente.");
    }
}


validateForm();
const setMovieButton = document.getElementById("addMovieButton");
setMovieButton.addEventListener("click", setMovieHandler);