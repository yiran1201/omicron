import { Router } from "express";
import WatchModel from '../models/watch-model'

const router = Router()

router.post('/', (request, response) => {
  console.log('***POST /api/watch')
  const watchDocument = new WatchModel({
    color: request.body.color,
    name: request.body.name,
    price: request.body.price,
  })
  console.log(watchDocument)
  watchDocument.save()
  response.status(200).json('Saved a watch!')
})

export default router