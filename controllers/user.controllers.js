const ShopModel = require("../database/models/schemas");
const BrandsModel = require("../database/models/schemasBrands");

const path = require("path");
const connection = require("../database/mongo.cnx");
const user = {
  getDashboard: (req, res) => {
    var list = ["item1", "item2", "nacho"];

    console.log("dasdasdad");

    res.json(list);
  },
  getNacho: async (req, res) => {
    try {
      await connection();

      const allProducts = await ShopModel.find();

      console.log(allProducts);

      console.log("connection ok");

      res.json(allProducts);
    } catch {}
  },
  getBrands: async (req, res) => {
    try {
      await connection();

      const allBrands = await BrandsModel.find();

      console.log(allBrands);

      console.log("connection ok");

      res.json(allBrands);
    } catch {}
  },
  addProducts:   (req, res) => {
     
    console.log("esta llegando el post ")
    
    let nombre = req.body.name
   

 
    console.log(nombre)
  
    res.status(200).send("prueba ");
  }
};

module.exports = user;
