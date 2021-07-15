const ShopModel = require("../database/models/schemas");
const BrandsModel = require("../database/models/schemasBrands");

const path = require("path");
const connection = require("../database/mongo.cnx");
const user = {
  getDashboard: (req, res) => {
    var list = ["item1", "item2", "nacho"];

 

    res.json(list);
  },
  getAllProducts: async (req, res) => {
    try {
      await connection();

      const allProducts = await ShopModel.find();

     

   

      res.json(allProducts);
    } catch {}
  },
  getdetails:  async (req, res) => {
    try {

      let valor = req.params.id

      await connection();

      const allProducts = await ShopModel.findOne({ IdProd: valor }).exec();

     
      console.log("llega")
   

      res.json(allProducts);
    } catch {}
  },
  getdetailsBrand:  async (req, res) => {
    try {

      let valor = req.params.nameBrand

      await connection();

      const allProducts = await BrandsModel.findOne({ Name: valor }).exec();

     
      console.log("llega")
   

      res.json(allProducts);
    } catch {}
  },

  
  getBrands: async (req, res) => {
    try {
      await connection();

      const allBrands = await BrandsModel.find();

 

    

      res.json(allBrands);
    } catch {}
  },
  addProducts:   (req, res) => {
     
 
    
    let nombre = req.body.name
   

 
   
  
    res.status(200).send("prueba ");
  }
};

module.exports = user;
