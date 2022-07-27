require("dotenv").config();
// const express = require("express");
// const app = express();
const koa = require('koa');
const Router = require('@koa/router');
const cors = require("@koa/cors");
const connection = require("./db");
const itemIdRoutes = require("./routes/itemid.js");
const paymentIdRoutes = require("./routes/paymentid.js");
const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/user.js");


const app = new koa();
const router = Router();
// const port = 4000

//database connection
connection();

//middlwares
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
    



//routes
app.use(itemIdRoutes.routes());
app.use(paymentIdRoutes.routes());
app.use(authRoutes.routes());
app.use(userRoutes.routes());


const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));