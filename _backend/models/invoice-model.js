import {Schema, model} from 'mongoose';

const InvoiceModel = new Schema({
  face: {
    name: String,
    source: String,
    price: Number,
  },
  band: {
    name: String,
    source: String,
    case_color: String,
    background: String,
    price: Number,
  },
  warranty: {
    name: String,
    price: Number,
  },
});

export default model('Invoice', InvoiceModel, 'invoices');
