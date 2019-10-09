const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.listen(process.env.PORT || 6969);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
app.use('/api', require("./routers/user"))


