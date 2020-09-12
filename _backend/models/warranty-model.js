import {Schema, model} from 'mongoose';

const WarrantyModel = new Schema({
  name: String,
  price: Number,
});

export default model('Warranty', WarrantyModel, 'warranties');
