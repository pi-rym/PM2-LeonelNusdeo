const app = require('./src/server');
const dbCon = require('./src/config/dbCon');

dbCon()
.then( () => {
	app.listen(3000, () => console.log("Server on port 3000"));
})
.catch((err) => console.log("Database connection problem", err.message));

