const router = require("express").Router();
const user = require("../controllers/user.controllers")

router.get("/api/getList",user.getDashboard)

router.get("/api/nacho",user.getNacho)

router.post("/addproductos",user.addProducts)


// Handles any requests that don't match the ones above
router.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;