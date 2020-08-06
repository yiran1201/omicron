import Mongoose from 'mongoose'

const PASSWORD = 'Yc123456'
const ATLAS_URI = `mongodb+srv://yiranchen:${PASSWORD}@cluster0.4vms1.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority`

const monogoClient = Mongoose
//数据库连接
monogoClient.connect(
  ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {console.log(`Successfully connected to MongoDB!`)}
)
monogoClient.connection.on('error', console.error.bind(console, 'MongoDB connection error...'))



