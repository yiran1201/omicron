import {Schema, model} from 'mongoose';

const WatchBandModel = new Schema({
  name: String,
  source: String,
  case_color: String,
  background: String,
  price: Number,
});

export default model('WatchBand', WatchBandModel, 'bands');
