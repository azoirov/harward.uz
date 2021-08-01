const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('result');
});


module.exports = {
	path: '/result',
	router
}