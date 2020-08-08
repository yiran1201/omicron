import { Router } from "express";
import DogModel from "../models/dog-model";
import { Types } from "mongoose"; // types 是什么？
const router = Router()

router.delete("/", async (request, response) => {
  console.log('***DELETE /api/dog')
  // const dogs = await DogModel.find()
  // response.status(200).json(dogs)
  await DogModel.deleteMany() // Promise / async
  response.status(200).json('Successfully deleted all dogs data')
})

//不要有两个相同API: 1.有同样的method 2.有同样的path
// router.get("/", (request, response) => {
//   console.log('***GET /api/dog')
//   response.status(200).json("dog1234")
// })

router.post('/', async (request, response) => {
  console.log('***POST/api/dog')
  const dogDocument = new DogModel({
    breed: request.body.breed,
    color: request.body.color,
    age: request.body.age,
  })
  console.log(dogDocument)
  await dogDocument.save()
  response.status(200).json('Saved a dog data')
})

export default router