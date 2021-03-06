const express = require('express');
const bodyParser  = require('body-parser');
const { errorHandler, listen } = require('./middlewares/common.js');
const routers = require('./routers');
const morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', routers);
app.use('/docs', express.static('docs'));
app.use(errorHandler);
app.listen(3003, listen);
