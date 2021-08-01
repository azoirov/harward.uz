const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('test1');
});


module.exports = {
	path: '/test1',
	router
}