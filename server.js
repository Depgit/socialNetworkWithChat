const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const logger = require("morgan");

//routes
const users = require("./routes/api/users");
const chatRoom = require("./routes/api/chatRoom");
const deleteRoom = require('./routes/api/deleteRoom');


// middleWare
import { decode } from './middlewares/jwt.js'


const app = express();

// port 
const port = process.env.PORT || 5000;
app.set("port", port);


