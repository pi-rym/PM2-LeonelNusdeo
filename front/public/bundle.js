/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const renderMovie = __webpack_require__(/*! ./render-movie.js */ \"./scripts/render-movie.js\");\n\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (data) => {\n\tdata.forEach((movie) => renderMovie(movie));\n})\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/render-movie.js":
/*!*********************************!*\
  !*** ./scripts/render-movie.js ***!
  \*********************************/
/***/ ((module) => {

eval("const movieContainer = document.getElementById(\"movieContainer\");\n\nfunction renderMovie(movie) {\n    const newATitle = document.createElement(\"a\");\n    const newImgPoster = document.createElement(\"img\");\n    const newPDirector = document.createElement(\"p\");\n    const newPDuration = document.createElement(\"p\");\n    const newPRate = document.createElement(\"p\");\n    // console.log(movie);\n\n    newATitle.innerHTML = movie.title;\n    newImgPoster.src = movie.poster;\n    newImgPoster.alt = `Poster de película ${movie.title}`;\n    newPDirector.innerHTML = `Director: ${movie.director}`;\n    newPDuration.innerHTML = `Duración: ${movie.duration}`;\n    newPRate.innerHTML = movie.rate;\n\n    newATitle.classList.add(\"card-title\");\n    newImgPoster.classList.add(\"img-fluid\", \"rounded-start\");\n    newPDirector.classList.add(\"card-text\");\n    newPDuration.classList.add(\"card-text\");\n    newPRate.classList.add(\"card-text\");\n\n    const bodyDiv = document.createElement(\"div\");\n    const cardDiv = document.createElement(\"div\");\n\n    bodyDiv.classList.add(\"card-body\");\n    cardDiv.classList.add(\"newDivClass\", \"card\");\n    cardDiv.style.width = \"18rem\";\n\n    bodyDiv.appendChild(newATitle);\n    bodyDiv.appendChild(newPDirector);\n    bodyDiv.appendChild(newPDuration);\n    bodyDiv.appendChild(newPRate);\n\n    cardDiv.appendChild(newImgPoster);\n    cardDiv.appendChild(bodyDiv);\n\n    moviesContainer.appendChild(cardDiv);\n}\n\nmodule.exports = renderMovie;\n\n//# sourceURL=webpack://front/./scripts/render-movie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;