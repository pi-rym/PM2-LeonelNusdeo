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

validateForm();