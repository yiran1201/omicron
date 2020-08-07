import { Schema, model } from "mongoose";

// define model
const Dog = new Schema({
  breed: String,
  color: String,
  age: Number,
})

// model(ModelName, Model, CollectionName)
// CollectionName 要小写 任意在data config 
// 所有的collectionName, databaseName, fieldName都是小写(snake_case),
// database里面实际数据可以大写
export default model('Dog', Dog, 'dogs')

// camelCase