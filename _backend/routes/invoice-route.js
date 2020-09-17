import InvoiceModel from '../models/invoice-model';
import {Router} from 'express';
import {Types} from 'mongoose';
import invoiceModel from '../models/invoice-model';

const router = Router();

const print = (type, route) => {
  const time = new Date().toLocaleString();
  console.log(`${type} ${'*'.repeat(6)} ${route} ${'*'.repeat(6)} ${time}`);
};

router.get('/:id', async (request, response) => {
  const invoiceId = request.params.id;
  print('GET', `/api/invoice/${invoiceId}`);
  try {
    const invoice = await InvoiceModel.findOne({
      _id: Types.ObjectId(invoiceId),
    }); //Types.ObjectId 是casting成了object id

    if (invoice) {
      const parsedInvoice = {
        //把数据格式转成前端可读
        face: {
          name: invoice.face.name,
          source: invoice.face.source,
          price: Number(invoice.face.price),
        },
        band: {
          name: invoice.band.name,
          source: invoice.band.source,
          caseColor: invoice.band.case_color,
          background: invoice.band.background,
          price: Number(invoice.band.price),
        },
        warranty: {
          name: invoice.warranty.name,
          price: Number(invoice.warranty.price),
        },
      };
      response.status(200).json(parsedInvoice);
    }
  } catch (error) {
    console.log(error);
    response.status(404).json({error: 'invoice not found'});
  }
});

router.post('/', async (request, response) => {
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
  const data = await invoiceDocument.save();
  response.status(200).json(data._id);
});

export default router;
