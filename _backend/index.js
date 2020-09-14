import './configs/database';

import cors from 'cors'; //Cross Origin Resource Share
import Express from 'express';
import path from 'path';
import InvoiceRoute from './routes/invoice-route';
import MockRoute from './routes/mock-route';
import WatchRoute from './routes/watch-route';

//数据库连接在configs/database.js文件
import bodyParser from 'body-parser';

const port = 7777;
const app = Express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 一级
app.use('/invoice', (request, response) => {
  response.status(200).json('piaji');
});

/***********************
 * Static Files Import *
 ***********************/
app.use('/build', Express.static(path.join(__dirname, './build')));

// 连接自己定义的route
// 二级
// app.use是用来register route
// app.use(route_path, function 或者是 file input)
app.use('/api/watch', WatchRoute);
app.use('/api/invoice', InvoiceRoute);
app.use('/api/mock', MockRoute);

// "/" match所有的path
// app.use('/', (request, response) => {
//   response.status(200).json('nina');
// });

app.use('*', (request, response) => {
  response.sendFile('index.html', {root: path.join(__dirname, './build')});
});

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
