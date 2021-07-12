const router = require("express").Router();
const user = require("../controllers/user.controllers")
const path = require('path');

router.get("/api/getList",user.getDashboard)

router.get("/api/nacho",user.getNacho)
router.get("/brands",user.getBrands)

router.get("/api/products/:id",user.getdetails)
router.get("/api/brands/:nameBrand",user.getdetailsBrand)
 
router.get('/products/:id', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


router.post("/addproductos",user.addProducts)


// Handles any requests that don't match the ones above
router.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

module.exports = router;