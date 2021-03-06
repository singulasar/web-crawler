const express = require('express');
const bodyParser = require('body-parser');

const fetchData = require('./router/fetchProductData');

const app = express();

app.use(bodyParser.json());

app.use(express.static('client/dist'));

app.use('/', fetchData);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});