import _ from 'lodash';
import {Router} from 'express';

import PartnerModel from '../models/partner-model';
import WarrantyModel from '../models/warranty-model';
import InvoiceModel from '../models/invoice-model';
import WatchBandModel from '../models/watch-band-model';
import WatchFaceModel from '../models/watch-face-model';

import BRANDS from '../mocks/brands.json';
import COUNTRIES from '../mocks/countries.json';
import FACES from '../mocks/faces.json';
import WARRANTIES from '../mocks/warranty.json';
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

const print = (type, route) => {
  const time = new Date().toLocaleString();
  console.log(`${type} ${'*'.repeat(6)} ${route} ${'*'.repeat(6)} ${time}`);
};
const router = Router();

router.post('/partners', async (request, response) => {
  print('POST', '/api/mock/partners');
  await PartnerModel.deleteMany();
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
    await partnerDocument.save();
  }
  response.status(200).json('sync partners metadata');
});

router.post('/bands', async (request, response) => {
  print('POST', '/api/mock/bands');
  await WatchBandModel.deleteMany(); //先删除数据，再添加
  for (const band of WATCHBANDS) {
    const watchBandDocument = new WatchBandModel({
      name: band.name,
      source: band.source,
      price: Number(band.price),
      case_color: band.case_color,
      background: band.background,
    });
    await watchBandDocument.save(); //添加数据
  }
  response.status(200).json('sync bands metadata');
});

router.post('/faces', async (request, response) => {
  print('POST', '/api/mock/faces');
  await WatchFaceModel.deleteMany();
  for (const face of FACES) {
    const watchFaceDocument = new WatchFaceModel({
      name: face.name,
      source: face.source,
      price: Number(face.price),
    });
    await watchFaceDocument.save();
  }
  response.status(200).json('sync faces metadata');
});

router.post('/warranties', async (request, response) => {
  print('POST', '/api/mock/warranties');
  await WarrantyModel.deleteMany();
  for (const warranty of WARRANTIES) {
    const warrantyDocument = new WarrantyModel({
      name: warranty.name,
      price: Number(warranty.price),
    });
    await warrantyDocument.save();
  }
  response.status(200).json('sync warranties metadata');
});

router.delete('/invoices', async (request, response) => {
  print('DELETE', '/api/mock/invoices');
  await InvoiceModel.deleteMany();
  response.status(200).json('clear invoices metadata');
});

export default router;
