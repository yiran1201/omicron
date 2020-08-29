import {Schema, model} from 'mongoose';

const WatchFace = new Schema({
  name: String,
  source: String,
  price: Number,
});

export default model('WatchFace', WatchFace, 'faces');
