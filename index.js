const express = require('express');
const mongoose = require("mongoose");
const keys = require("./keys/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./models/Board");
require("./models/Table");
require("./models/Task");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require("./routes/userRoutes")(app);
require("./routes/boardRoutes")(app);
require("./routes/tableRoutes")(app);
require("./routes/taskRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
