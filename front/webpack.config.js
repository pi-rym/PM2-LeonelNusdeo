const path = require("path");

module.exports = {
	mode: "development",
	entry: {
    'index': './scripts/index.js',
    'create-movie': './scripts/create-movie.js',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: "[name].bundle.js",
	},
};