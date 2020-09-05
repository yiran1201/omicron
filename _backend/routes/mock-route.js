import {Router} from 'express';

import PartnerModel from '../models/partner-model';
import _ from 'lodash';
import BRANDS from '../mocks/brands.json';
import COUNTRIES from '../mocks/countries.json';
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
export default router;
