import InvoiceModel from '../models/invoice-models';
import {Router} from 'express';
import {Types} from 'mongoose';

const choice = (arr) => {
  const randomIndex1 = Math.floor(Math.random() * arr.length);
  return arr[randomIndex1];
};

const randomPrice = () => {
  const p = Math.floor(Math.random() * 1500);
  return p.toFixed(2);
};

const randomQuantity = () => {
  const q = Math.floor(Math.random() * 800);
  return q;
};

const randomDate = () => {
  const letters = 'Jan';
  const numbers = `1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
  17,18,19,20,21,22,23,24,25,26,27,28,29,30,31`;
  const numbersFinal = numbers.split(',');
  const selectNumber = choice(numbersFinal);
  return letters + selectNumber;
};
const router = Router();

router.get('/', async (request, response) => {
  console.log('***Get /api/invoice');
  for (let i = 0; i < 10; i++) {
    const invoiceDocument = new InvoiceModel({
      price: randomPrice(),
      quantity: randomQuantity(),
      date: randomDate(),
    });
    await invoiceDocument.save();
  }
  response.status(200).json('Saved a invoice');
});

router.get('/all', async (request, response) => {
  console.log('***GET/api/invoice/all');
  const invoices = await InvoiceModel.find();
  response.status(200).json(invoices);
});

router.delete('/:id', async (request, response) => {
  console.log('***DELETE/api/invoice/:id');
  const invoiceId = request.params.id;
  await InvoiceModel.deleteOne({_id: Types.ObjectId(invoiceId)});
  response.status(200).json('Successfully deleted invoice');
});

router.post('/', (request, response) => {
  console.log('*** POST /api/invoice/');
  // how to use request.body ?
  const invoiceDocument = new InvoiceModel({
    price: request.body.price,
    quantity: request.body.quantity,
    date: request.body.date,
  });
  console.log(invoiceDocument);
  invoiceDocument.save();
  response.status(200).json('abcd');
});

router.get('/test', (request, response) => {
  console.log('*** GET /api/invoice/test');

  response.status(200).json('abcd');
});

export default router;
