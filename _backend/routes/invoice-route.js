import InvoiceModel from '../models/invoice-model';
import {Router} from 'express';
import {Types} from 'mongoose';
import invoiceModel from '../models/invoice-model';

const router = Router();

const print = (type, route) => {
  const time = new Date().toLocaleString();
  console.log(`${type} ${'*'.repeat(6)} ${route} ${'*'.repeat(6)} ${time}`);
};

router.post('/invoice', (request, response) => {
  print('POST', '/api/invoice/');
  const invoiceDocument=new invoiceModel({
    face:request.body.face

  })
});

router.get('/invoice/:id', (request, response) => {
  const invoiceId = request.params.id;
  print('GET', `/api/invoice/${invoiceId}`);
});

export default router;
