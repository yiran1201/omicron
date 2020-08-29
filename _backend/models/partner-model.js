import {Schema, model} from 'mongoose';

const PartnerModel = new Schema({
  source: String,
  shop: [
    {
      country: String,
      count: Number,
    },
  ],
  name: String,
});

export default model('Partner', PartnerModel, 'partners');
