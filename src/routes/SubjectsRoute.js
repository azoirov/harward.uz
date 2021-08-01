const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('subjects');
});


module.exports = {
	path: '/subjects',
	router
}