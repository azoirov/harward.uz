const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('text');
});


module.exports = {
	path: '/text',
	router
}