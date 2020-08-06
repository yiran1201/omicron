import { Schema, model } from "mongoose";

const Invoice = new Schema({
  price: Number,
  quantity: Number,
  date: String
})

export default model('Invoice', Invoice, 'invoices')