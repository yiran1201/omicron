import { Schema, model } from "mongoose";

// define model
const Watch = new Schema({
  color: String, 
  name: String, 
  price: String
})

// model(ModelName, Model, CollectionName)
export default model('Watch', Watch, 'watches')