const mongoose = require('mongoose');

const dbCon = async () => {
	await mongoose.connect("mongodb+srv://leonelnusdeo:vosMandaFruta79014@cluster.o7qswlu.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster");
};

module.exports = dbCon;