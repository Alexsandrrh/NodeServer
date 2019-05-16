const express = require('express');
const app = express();
const { port } = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const favicon = require('express-favicon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: false }));
app.use(cookieParser());
app.use(cors());

// Init Routers
app.use('/', require('./router/index'));
app.use('/api', require('./api/posts'));

app.listen(port, () => {
  console.info(`NodeServer started...\nOn port http://localhost:${port}`);
});
