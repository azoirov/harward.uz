const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('test2');
});


module.exports = {
	path: '/test2',
	router
}