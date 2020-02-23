//Requirements
const path = require("path");

module.exports = function(app) {
	// survey loaded when "Fill Out Pointless Survey" button pressed
	app.get("/survey", (req, res) => {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// default home
	app.use((req, res) => {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};