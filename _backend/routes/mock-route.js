import { Router } from "express";
import WatchModel from '../models/watch-model'

// choice 是用来拿arr里面随机的元素
const choice = arr => {
  // Math.random() 这是return 0到1之间的任意小数
  // Math.floor() 小数取整(忽略四舍五入) 3.2=>3 3.6=>3 
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

const randomPrice = () => {
  const low = 500
  const high = 2000
  return (Math.random() * (high - low) + low).toFixed(2)
}

const randomName = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const numbers = '0123456789'.split('')
  const selectLetter = choice(letters)
  const selectNumber = choice(numbers)
  return selectLetter + selectNumber
}

const COLORS = ['red', 'navy', 'gray', 'black', 'ice', 'blossom']
const randomColor = () => {
  return choice(COLORS)
}
const router = Router()

router.get("/", async (request, response) => {
  // console.log('***GET /api/mock')
  // await WatchModel.deleteMany()
  // for (let i = 0; i < 5; i++) {
  //   const watchDocument = new WatchModel({
  //     color: randomColor(),
  //     name: randomName(),
  //     price: randomPrice()
  //   })
  //   console.log(watchDocument)
  //   await watchDocument.save()
  // }
  response.status(200).json('Saved a watch!')
})

export default router