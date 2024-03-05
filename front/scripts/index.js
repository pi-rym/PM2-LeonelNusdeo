const movieContainer = document.getElementById("movieContainer");

$.get("https://students-api.2.us-1.fl0.io/movies", (data) => {
	data.forEach((movie) => renderMovie(movie));
})

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

    const newDiv = document.createElement("div");

    newDiv.appendChild(newATitle);
    newDiv.appendChild(newImgPoster);
    newDiv.appendChild(newPDirector);
    newDiv.appendChild(newPDuration);
    newDiv.appendChild(newPRate);

    newDiv.classList.add("newDivClass");

    moviesContainer.appendChild(newDiv);
}
