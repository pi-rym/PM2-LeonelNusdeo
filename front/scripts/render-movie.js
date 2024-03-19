const movieContainer = document.getElementById("movieContainer");

function renderMovie(movie) {
    const newATitle = document.createElement("a");
    const newImgPoster = document.createElement("img");
    const newPDirector = document.createElement("p");
    const newPDuration = document.createElement("p");
    const newPRate = document.createElement("p");
    // console.log(movie);

    newATitle.innerHTML = movie.title;
    newImgPoster.src = movie.poster;
    newImgPoster.alt = `Poster de película ${movie.title}`;
    newPDirector.innerHTML = `Director: ${movie.director}`;
    newPDuration.innerHTML = `Duración: ${movie.duration}`;
    newPRate.innerHTML = movie.rate;

    newATitle.classList.add("card-title");
    newImgPoster.classList.add("img-fluid", "rounded-start");
    newPDirector.classList.add("card-text");
    newPDuration.classList.add("card-text");
    newPRate.classList.add("card-text");

    const bodyDiv = document.createElement("div");
    const cardDiv = document.createElement("div");

    bodyDiv.classList.add("card-body");
    cardDiv.classList.add("newDivClass", "card", "shadow", "p-3", "mb-5", "bg-body-tertiary", "rounded");
    cardDiv.style.width = "18rem";

    bodyDiv.appendChild(newATitle);
    bodyDiv.appendChild(newPDirector);
    bodyDiv.appendChild(newPDuration);
    bodyDiv.appendChild(newPRate);

    cardDiv.appendChild(newImgPoster);
    cardDiv.appendChild(bodyDiv);

    moviesContainer.appendChild(cardDiv);
}

module.exports = renderMovie;