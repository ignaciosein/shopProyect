const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
 const mongoose = require("mongoose");
 
 let password =  process.env.PASS_DB ;
 let shop = process.env.DB_NAME
 
 
  const connectionS = `mongodb+srv://shop:${password}@cluster0.ej5za.mongodb.net/${shop}?retryWrites=true&w=majority`;
 

  module.exports = () => mongoose.connect(connectionS,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex : true,
    useFindAndModify: false
  })
    .then(()=>{
      console.log('Mongo DataBase connected')
    })
    .catch( err => { 
      console.error(err)
    })