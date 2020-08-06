import Express from "express";

//数据库连接在configs/database.js文件
import './configs/database';
import WatchRoute from './routes/watch-route'
import CatRoute from './routes/cat-route'
import InvoiceRoute from './routes/invoice-route'
import bodyParser from "body-parser";
//import { sample2 } from './routes/test'
//console.log(sample2)

const port = 7777;
const app = Express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use("/invoice", (request, response) => {
  response.status(200).json("invoicepage");
});

//  连接自己定义的route
app.use("/api/watch", WatchRoute)
app.use("/api/invoice", InvoiceRoute)
app.use("/cat", CatRoute)

//app.use(route_path, function)
app.use("/greet", (request, response) => {
  response.status(200).json("hello world");
});

app.use("/watch/", (request, response) => {
  response.status(200).json("shoubiao")
})

// "/" match所有的path
app.use("/", (request, response) => {
  response.status(200).json("nina");
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

