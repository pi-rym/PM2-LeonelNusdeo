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

/***/ "./scripts/create-movie.js":
/*!*********************************!*\
  !*** ./scripts/create-movie.js ***!
  \*********************************/
/***/ (() => {

eval("function validateForm() {\n    const form = document.getElementById(\"addMovieForm\");\n\n    form.addEventListener('submit', event => {\n        if (!form.checkValidity()) {\n            event.preventDefault()\n            event.stopPropagation()\n        }\n        form.classList.add('was-validated')\n    });\n}\n\nfunction clearForm() {\n    const clearButton = document.getElementById(\"clearFormButton\")\n\n    clearButton.addEventListener('click', event => {\n        event.preventDefault();\n        const form = document.getElementById(\"addMovieForm\");\n        form.reset();\n    })\n\n}\n\nconst setMovieHandler = () => {\n    // Seleccionar los inputs de title, description e imgUrl.\n    const titleInput = document.getElementById(\"titleInput\");\n    const yearInput = document.getElementById(\"yearInput\");\n    const directorInput = document.getElementById(\"directorInput\");\n    const durationInput = document.getElementById(\"durationInput\");\n    const genreInput = document.getElementById(\"genreInput\");\n    const rateInput = document.getElementById(\"rateInput\");\n    const posterInput = document.getElementById(\"posterInput\");\n    // Tomar los valores ingresados en los inputs y guardarlos en variables.\n    const title = titleInput.value;\n    const year = parseInt(yearInput.value);\n    const director = directorInput.value;\n    const duration = durationInput.value;\n    const genre = genreInput.value.split(', ');\n    const rate = parseFloat(rateInput.value);\n    const poster = posterInput.value;\n    // Validar que estos valores estén completos.\n    if(!title || !year || !director || !duration || !genre || !rate || !poster) {\n        return alert(\"Datos incompletos. Por favor ingrese todos los campos.\");\n    } else {\n        const movie = { title, year, director, duration, genre, rate, poster };\n        console.log(movie);\n        return alert(\"Pelicula creada correctamente.\");\n    }\n}\n\n\nvalidateForm();\nconst setMovieButton = document.getElementById(\"addMovieButton\");\nsetMovieButton.addEventListener(\"click\", setMovieHandler);\n\n//# sourceURL=webpack://front/./scripts/create-movie.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/create-movie.js"]();
/******/ 	
/******/ })()
;