import {Router} from 'express';
import WatchModel from '../models/watch-model';
import WatchFaceModel from '../models/watch-face-model';
import WatchBandModel from '../models/watch-band-model';
import {Types} from 'mongoose';

import PartnerModel from '../models/partner-model';
const router = Router();

/**************
 * Watch Face *
 **************/

router.post('/face', async (request, response) => {
  console.log('***POST /api/watch/face');
  const watchFaceDocument = new WatchFaceModel({
    name: request.body.name,
    source: request.body.source,
    price: request.body.price,
  });
  console.log(watchFaceDocument);
  const data = await watchFaceDocument.save();
  response.status(200).json(data);
});

router.get('/face/all', async (request, response) => {
  console.log('***GET /api/watch/face/all');
  const faces = await WatchFaceModel.find();
  response.status(200).json(faces);
});

/**************
 * Watch Band *
 **************/
router.post('/band', async (request, response) => {
  console.log('***POST /api/watch/band');
  const watchBandDocument = new WatchBandModel({
    name: request.body.name,
    source: request.body.source,
    price: request.body.price,
    case_color: request.body.case_color,
    background: request.body.background,
  });
  const data = await watchBandDocument.save();
  response.status(200).json(data);
});

router.get('/band/all', async (request, response) => {
  console.log('***GET /api/watch/band/all');
  const bands = await WatchBandModel.find();
  response.status(200).json(bands);
});

/***********
 * Partner *
 ***********/
router.post('/partner', async (request, response) => {
  console.log('***POST /api/watch/partner');
  console.log(request.body.shop);
  const partnerDocument = new PartnerModel({
    name: request.body.name,
    source: request.body.source,
    shop: request.body.shop,
  });
  const data = await partnerDocument.save();
  response.status(200).json(data);
});

router.get('/partner/all', async (request, response) => {
  console.log('***GET /api/watch/partner/all');
  const partners = await PartnerModel.find();
  response.status(200).json(partners);
});

/*********
 * Watch *
 *********/
router.get('/all', async (request, response) => {
  console.log('***GET /api/watch/all');
  //所有的database都是异步的
  const watches = await WatchModel.find(); // Promise / async
  response.status(200).json(watches);
});

router.delete('/all', async (request, response) => {
  console.log('***DELETE /api/watch/all');
  //所有的database都是异步的
  await WatchModel.deleteMany(); // Promise / async
  response.status(200).json('Successfully deleted all watches');
});

router.delete('/:id', async (request, response) => {
  console.log('***DELETE /api/watch/:id'); //id是变量
  const watchId = request.params.id;
  //所有的database都是异步的
  await WatchModel.deleteOne({_id: Types.ObjectId(watchId)}); // Promise / async
  response.status(200).json(`Successfully deleted watch: ${watchId}`);
});

router.get('/:id', async (request, response) => {
  console.log('***GET /api/watch/:id'); //id是变量
  const watchId = request.params.id;
  //所有的database都是异步的
  const watch = await WatchModel.findOne({_id: Types.ObjectId(watchId)}); // Promise / async
  response.status(200).json(watch);
});

router.post('/', async (request, response) => {
  console.log('***POST /api/watch');
  const watchDocument = new WatchModel({
    color: request.body.color,
    name: request.body.name,
    price: request.body.price,
  });
  console.log(watchDocument);
  await watchDocument.save();
  response.status(200).json('Saved a watch!');
});

export default router;
