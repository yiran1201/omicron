import { Router } from "express";
import Invoice from '../models/invoice-models'

const router = Router()

router.post("/", (request, response) => {
  console.log('*** POST /api/invoice/')
  // how to use request.body ?
  const invoiceDocument = new Invoice({
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