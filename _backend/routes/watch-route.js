import {Router} from 'express';
import WatchModel from '../models/watch-model';
import WatchFaceModel from '../models/watch-face-model';
import WatchBandModel from '../models/watch-band-model';
import WarrantyModel from '../models/warranty-models';
import ClientModel from '../models/client-models';
import PartnerModel from '../models/partner-model';
import {Types} from 'mongoose';

const router = Router();

/**************
 * Watch Face *
 **************/

router.post('/face', async (request, response) => {
  console.log('***POST /api/watch/face');
  const watchFaceDocument = new WatchFaceModel({
    name: request.body.name,
    source: request.body.source,
    price: Number(request.body.price),
  });
  console.log(watchFaceDocument);
  const data = await watchFaceDocument.save();
  response.status(200).json(data);
});

// data clean
router.get('/face/all', async (request, response) => {
  console.log('***GET /api/watch/face/all');
  const faces = await WatchFaceModel.find();
  const parsedFaces = [];
  for (const face of faces) {
    parsedFaces.push({
      name: face.name,
      source: face.source,
      price: face.price,
    });
  }
  response.status(200).json(parsedFaces);
});

/**************
 * Watch Band *
 **************/
router.post('/band', async (request, response) => {
  console.log('***POST /api/watch/band');
  const watchBandDocument = new WatchBandModel({
    name: request.body.name,
    source: request.body.source,
    price: Number(request.body.price),
    case_color: request.body.case_color,
    background: request.body.background,
  });
  const data = await watchBandDocument.save();
  response.status(200).json(data);
});

router.get('/band/all', async (request, response) => {
  console.log('***GET /api/watch/band/all');
  const bands = await WatchBandModel.find();
  const parsedBands = [];
  for (const band of bands) {
    parsedBands.push({
      //在后端做data clean up
      name: band.name,
      source: band.source,
      price: band.price,
      caseColor: band.case_color,
      background: band.background,
    });
  }
  response.status(200).json(parsedBands);
});

/***********
 * Warranty*
 ***********/
router.post('/warranty', async (request, response) => {
  console.log('***POST/api/watch/warranty');
  const warrantyDocument = new WarrantyModel({
    name: request.body.name,
    price: Number(request.body.price),
  });
  const data = await warrantyDocument.save();
  response.status(200).json(data);
});

router.get('/warranty/all', async (request, response) => {
  console.log('***GET /api/watch/warranty/all');
  const warranties = await WarrantyModel.find();
  const parsedWarranties = [];
  for (const warranty of warranties) {
    parsedWarranties.push({
      name: warranty.name,
      price: Number(warranty.price),
    });
  }
  response.status(200).json(parsedWarranties)
});

/***********
 * ClientInfo *
 ***********/
router.post('/client', async (request, response) => {
  console.log('***POST/api/watch/client');
  const clientDocument = new ClientModel({
    name: request.body.name,
    address: request.body.address,
    city: request.body.city,
    state: request.body.state,
    zip: request.body.zip,
  });
  const data = await clientDocument.save();
  response.status(200).json(data);
});

router.get('/client/all', async (request, response) => {
  console.log('***GET/api/watch/client/all');
  const clients = await ClientModel.find();
  const parseClients = [];
  for (const client of clients) {
    parseClients.push({
      name: client.name,
      address: client.address,
      city: client.city,
      state: client.state,
      zip: client.zip,
    });
  }
});

/***********
 * Partner *
 ***********/
router.post('/partner', async (request, response) => {
  console.log('***POST /api/watch/partner');
  const partnerDocument = new PartnerModel({
    name: request.body.name,
    source: request.body.source,
    shops: request.body.shops.map((shop) => {
      return {
        country: shop.country,
        count: Number(shop.count),
      };
    }),
  });
  const data = await partnerDocument.save();
  response.status(200).json(data);
});

router.get('/partner/all', async (request, response) => {
  console.log('***GET /api/watch/partner/all');
  const partners = await PartnerModel.find();
  const parsedPartners = [];
  for (const partner of partners) {
    const parsedShops = partner.shops.map((item) => {
      return [item.country, item.count];
    });
    parsedShops.unshift(['Country', 'Shops']);
    parsedPartners.push({
      name: partner.name,
      source: partner.source,
      shops: parsedShops,
    });
  }
  response.status(200).json(parsedPartners);
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
