const ShopModel = require("../database/models/schemas")
const path = require('path');
const connection = require("../database/mongo.cnx")
const user = {
  getDashboard: (req, res) => {
    var list = ["item1", "item2", "nacho"];
 
    console.log("dasdasdad");

    res.json(list);

 
  },
  getNacho: async (req, res) => {
 
    try{

      await connection();

      const allProducts = await ShopModel.find();

      console.log(allProducts)

      console.log("connection ok")

      res.json(allProducts) 

     
    }
    catch{


    }




    

    

 
  }
};

module.exports = user;
