
const router = require("express").Router();

router.get("/", async (req, res) => {
	res.render('registr2');
});


module.exports = {
	path: '/registr2',
	router
}