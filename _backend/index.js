import Express from "express";

//数据库连接在configs/database.js文件
import './configs/database';
import WatchRoute from './routes/watch-route'
import CatRoute from './routes/cat-route'
import InvoiceRoute from './routes/invoice-route'
import bodyParser from "body-parser";
import DogRoute from "./routes/dog-route"
import MockRoute from "./routes/mock-route"


const port = 7777;
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 一级
app.use("/invoice", (request, response) => {
  response.status(200).json("invoicepage");
});

// 连接自己定义的route 
// 二级
// app.use是用来register route
// app.use(route_path, function 或者是 file input)
app.use("/api/watch", WatchRoute)
app.use("/api/invoice", InvoiceRoute)
app.use("/cat", CatRoute)
app.use('/api/dog', DogRoute)//
app.use('/api/mock', MockRoute)


// "/" match所有的path
app.use("/", (request, response) => {
  response.status(200).json("nina");
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

