const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('kurslar');
});


module.exports = {
	path: '/kurslar',
	router
}