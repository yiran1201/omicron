import _ from 'lodash';
import {Router, response, request} from 'express';

import PartnerModel from '../models/partner-model';
import WatchBandModel from '../models/watch-band-model';
import watchFaceModel from '../models/watch-face-model';

import BRANDS from '../mocks/brands.json';
import COUNTRIES from '../mocks/countries.json';
import FACES from '../mocks/faces.json';
import WATCHBANDS from '../mocks/bands.json';

// choice 是用来拿arr里面随机的元素
const choice = (arr) => {
  // Math.random() 这是return 0到1之间的任意小数
  // Math.floor() 小数取整(忽略四舍五入) 3.2=>3 3.6=>3
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const randomShopCount = () => {
  const low = 500;
  const high = 2000;
  return Math.floor(Math.random() * (high - low) + low);
};

const router = Router();

router.get('/partners', async (request, response) => {
  console.log('***GET /api/mock/partners');
  for (const brand of BRANDS) {
    //config shops data for a brand
    let sampleCountries = COUNTRIES.slice();
    const shops = [];
    while (shops.length < 13) {
      sampleCountries = _.shuffle(sampleCountries);
      const country = sampleCountries.pop();
      shops.push({
        country: country,
        count: _.random(5000, 30000),
      });
    }

    // insert partner data into model and save in database
    const partnerDocument = new PartnerModel({
      name: brand.name,
      source: brand.source,
      shops: shops,
    });
    const data = await partnerDocument.save();
  }
  response.status(200).json('sync partners metadata');
});

router.get('/', async (request, response) => {
  console.log('***GET /api/mock');
  response.status(200).json('Mock');
});

// band
router.get('/bands', async (request, response) => {
  console.log('***GET /api/mock/bands');
  for (const band of WATCHBANDS) {
    const watchBandDocument = new WatchBandModel({
      name: band.name,
      source: band.source,
      price: Number(band.price),
      case_color: band.case_color,
      background: band.background,
    });
    await watchBandDocument.save();
  }
  response.status(200).json('sync bands metadata');
});

//faces
router.get('/faces', async (request, response) => {
  console.log('***GET /api/mock/faces');
  for (const face of FACES) {
    const watchFaceDocument = new watchFaceModel({
      name: face.name,
      source: face.source,
      price: Number(face.price),
    });
    await watchFaceDocument.save();
  }
  response.status(200).json('sync faces metadata');
});
export default router;
