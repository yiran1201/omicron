import {Schema, model} from 'mongoose';

const WatchFaceModel = new Schema({
  name: String,
  source: String,
  price: Number,
});

export default model('WatchFace', WatchFaceModel, 'faces');
