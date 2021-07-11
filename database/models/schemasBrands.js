const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AutoIncrement = require("mongoose-sequence")(mongoose);

const BrandsSchema= new Schema({
  IdProd: {
    type: Number,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Relevance: {
    type: Number,
    require: true,
  },
  Price: {
    type: Number,
    require: true,
  },
  IdBusiness: {
    type: Number,
    required: true,
  },
});
/* 
  shopSchema.plugin(AutoIncrement, { inc_field: "IdProd" });  */ 
const BrandModel = mongoose.model("brands", BrandsSchema);
module.exports = BrandModel;

/* 

const producto1 = new shopProducts({
  IdProd: 1,

  Name: "tomate",

  Relevance: 3.3,

  Price: 5,

  IdBusiness: 5,
});

producto1.save(); */