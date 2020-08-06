import { Router } from "express";
import WatchModel from '../models/watch-model'

const router = Router()

router.get("/yellow", (request, response) => {
  console.log('*** GET /cat/yellow')
  response.status(200).json("xiaohuangmao")
})

//match 以cat black开头的path
router.get("/black", (request, response) => {
  response.status(200).json("xiaoheimao")
})

// match 以cat开头的path
router.get("/", (request, response) => {
  response.status(200).json("12345")
})
export default router