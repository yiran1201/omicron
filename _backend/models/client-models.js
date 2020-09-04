import {Schema, model} from 'mongoose';

const ClientModel = new Schema({
  name: String,
  address: String,
  city: String,
  state: String,
  zip: String,
});

export default model('ClientInfo', ClientModel, 'clients');
