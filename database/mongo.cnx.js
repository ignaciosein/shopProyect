const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
 
console.log(process.env.PORT);
const mongoose = require("mongoose");
                
 

 


mongoose.connect(process.env.DB_SHOP,{ 
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