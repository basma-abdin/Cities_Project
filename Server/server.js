const express = require("express");
// require('dotenv').config();
// process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
let config = require('config');
const cors = require("cors");

const HttpException = require('./utils/HttpException.utils');
const villeRouter = require('./routes/ville.route');

const db = require('./db/db.config.js');
db.sequelize.sync().then(() => {
  console.log('Resync ');
});


const app = express();
app.use(express.json());
app.use(cors());

const port = Number(config.PORT || 3331);

app.use('/api/v1/villes', villeRouter);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// starting the server
app.listen(port, () =>
    console.log(`🚀 Server running on port ${port}!`));

module.exports = app;




// sudo mysql -u root -p test_cdi < villes_france.sql