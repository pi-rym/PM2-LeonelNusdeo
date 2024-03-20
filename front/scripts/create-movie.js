const axios = require('axios');

function validateForm() {
    form.addEventListener('click', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
    });
}

const clearForm = () => {
    titleInput.value = "";
    yearInput.value = "";
    directorInput.value = "";
    durationInput.value = "";
    genreInput.value = "";
    rateInput.value = "";
    posterInput.value = "";
    form.classList.remove('was-validated');
}

const setMovieHandler = () => {
    const title = titleInput.value;
    const year = parseInt(yearInput.value);
    const director = directorInput.value;
    const duration = durationInput.value;
    const genre = genreInput.value.split(', ');
    const rate = parseFloat(rateInput.value);
    const poster = posterInput.value;

    const minYear = 1888;
    const maxYear = new Date().getFullYear();
    if (isNaN(year) || year < minYear || year > maxYear) {
        alert(`Uno o más datos inválidos.\nPor favor ingrese correctamente todos los campos.`);
        validateForm();
        yearInput.value = "";
        return;
    }

    const minRate = 0;
    const maxRate = 10;
    if (isNaN(rate) || rate < minRate || rate > maxRate) {
        alert(`Uno o más datos inválidos.\nPor favor ingrese correctamente todos los campos.`);
        validateForm();
        rateInput.value = "";
        return;
    }

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        alert(`Uno o más datos inválidos.\nPor favor ingrese correctamente todos los campos.`);
        validateForm();
        return;
    } else {
        const movie = { title, year, director, duration, genre, rate, poster };

        axios.post('http://localhost:3000/movies', movie)
            .then(res => {
                console.log('Pelicula creada correctamente.', res.data);
                clearForm();
            })
            .catch(error => {
                console.log(error);
            });
    }
}

const form = document.getElementById("addMovieForm");
const titleInput = document.getElementById("titleInput");
const yearInput = document.getElementById("yearInput");
const directorInput = document.getElementById("directorInput");
const durationInput = document.getElementById("durationInput");
const genreInput = document.getElementById("genreInput");
const rateInput = document.getElementById("rateInput");
const posterInput = document.getElementById("posterInput");
const setMovieButton = document.getElementById("addMovieButton");
const clearButton = document.getElementById("clearFormButton")

setMovieButton.addEventListener("click", setMovieHandler);
clearButton.addEventListener('click', clearForm);