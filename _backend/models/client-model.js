import {Schema, model} from 'mongoose';

const ClientModel = new Schema({
  unit_price: Number,
  quantity: Number,
  payment_term: String,
  logistic: String,
  client_name: String,
  address: {
    street_address_1: String,
    street_address_2: String,
    city: String,
    state: String,
    zip_code: String,
  },
});

export default model('ClientInfo', ClientModel, 'clients');
