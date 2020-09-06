## Unused RESTful API

```js
/*********
 * Watch *
 *********/
router.get('/all', async (request, response) => {
  console.log('***GET /api/watch/all');
  //所有的database都是异步的
  const watches = await WatchModel.find(); // Promise / async
  response.status(200).json(watches);
});

router.delete('/all', async (request, response) => {
  console.log('***DELETE /api/watch/all');
  //所有的database都是异步的
  await WatchModel.deleteMany(); // Promise / async
  response.status(200).json('Successfully deleted all watches');
});

router.delete('/:id', async (request, response) => {
  console.log('***DELETE /api/watch/:id'); //id是变量
  const watchId = request.params.id;
  //所有的database都是异步的
  await WatchModel.deleteOne({_id: Types.ObjectId(watchId)}); // Promise / async
  response.status(200).json(`Successfully deleted watch: ${watchId}`);
});

router.get('/:id', async (request, response) => {
  console.log('***GET /api/watch/:id'); //id是变量
  const watchId = request.params.id;
  //所有的database都是异步的
  const watch = await WatchModel.findOne({_id: Types.ObjectId(watchId)}); // Promise / async
  response.status(200).json(watch);
});

router.post('/', async (request, response) => {
  console.log('***POST /api/watch');
  const watchDocument = new WatchModel({
    color: request.body.color,
    name: request.body.name,
    price: request.body.price,
  });
  console.log(watchDocument);
  await watchDocument.save();
  response.status(200).json('Saved a watch!');
});
```
