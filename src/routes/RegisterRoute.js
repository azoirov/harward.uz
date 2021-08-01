const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('registr');
});


module.exports = {
	path: '/registr',
	router
}