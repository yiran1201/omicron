import { Router } from "express";
import InvoiceModel from '../models/invoice-models'
import { Types } from "mongoose";

const router = Router()

router.get('/all', async (request, response) => {
  console.log('***GET/api/invoice/all')
  const invoices = await InvoiceModel.find()
  response.status(200).json(invoices)
})

router.delete('/:id', async (request, response) => {
  console.log('***DELETE/api/invoice/:id')
  const invoiceId = request.params.id
  await InvoiceModel.deleteOne({ _id: Types.ObjectId(invoiceId) })
  response.status(200).json('Successfully deleted invoice')
})


router.post("/", (request, response) => {
  console.log('*** POST /api/invoice/')
  // how to use request.body ?
  const invoiceDocument = new InvoiceModel({
    price: request.body.price,
    quantity: request.body.quantity,
    date: request.body.date,
  })
  console.log(invoiceDocument)
  invoiceDocument.save()
  response.status(200).json("abcd")
})


router.get("/test", (request, response) => {
  console.log('*** GET /api/invoice/test')

  response.status(200).json("abcd")
})

export default router