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

    newATitle.classList.add("card-title");
    newImgPoster.classList.add("img-fluid", "rounded-start");
    newPDirector.classList.add("card-text");
    newPDuration.classList.add("card-text");
    newPRate.classList.add("card-text");

    const imgDiv = document.createElement("div");
    const infoDiv = document.createElement("div");
    const infoBodyDiv = document.createElement("div");
    const containerDiv = document.createElement("div");
    const cardDiv = document.createElement("div");

    imgDiv.classList.add("col-md-4");
    infoDiv.classList.add("col-md-8");
    infoBodyDiv.classList.add("card-body");
    containerDiv.classList.add("row", "g-0");
    cardDiv.classList.add("newDivClass", "card", "mb-3");
        
    imgDiv.appendChild(newImgPoster);

    infoBodyDiv.appendChild(newATitle);
    infoBodyDiv.appendChild(newPDirector);
    infoBodyDiv.appendChild(newPDuration);
    infoBodyDiv.appendChild(newPRate);

    infoDiv.appendChild(infoBodyDiv);

	containerDiv.appendChild(imgDiv);
	containerDiv.appendChild(infoDiv);
	
	cardDiv.appendChild(containerDiv);

    moviesContainer.appendChild(cardDiv);
}
