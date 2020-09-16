import InvoiceModel from '../models/invoice-model';
import {Router} from 'express';
import {Types} from 'mongoose';
import invoiceModel from '../models/invoice-model';

const router = Router();

const print = (type, route) => {
  const time = new Date().toLocaleString();
  console.log(`${type} ${'*'.repeat(6)} ${route} ${'*'.repeat(6)} ${time}`);
};

router.post('/', async(request, response) => {
  print('POST', '/api/invoice/');
  const invoiceDocument = new invoiceModel({
    face: {
      name: request.body.face.name,
      source: request.body.face.source,
      price: Number(request.body.face.price),
    },
    band: {
      name: request.body.band.name,
      source: request.body.band.source,
      case_color: request.body.band.caseColor,
      background: request.body.band.background,
      price: Number(request.body.band.price),
    },
    warranty: {
      name: request.body.warranty.name,
      price: Number(request.body.warranty.price),
    },
  });
  const data= await invoiceDocument.save()
  response.status(200).json(data._id)

});


router.get('/invoice/:id', (request, response) => {
  const invoiceId = request.params.id;
  print('GET', `/api/invoice/${invoiceId}`);
});

export default router;
