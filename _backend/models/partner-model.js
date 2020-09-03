import {Schema, model} from 'mongoose';

const PartnerModel = new Schema({
  name: String,
  source: String,
  shops: [
    {
      country: String,
      count: Number,
    },
  ],
});

export default model('Partner', PartnerModel, 'partners');
