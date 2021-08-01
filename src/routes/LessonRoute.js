const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('lesson');
});


module.exports = {
	path: '/lesson',
	router
}