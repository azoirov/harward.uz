const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('aloqa');
});


module.exports = {
	path: '/aloqa',
	router
}