require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const path = require('path')
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const historyRoutes = require("./routes/history");
// const koa = require('koa');
// const Router = require('@koa/router');
// const cors = require("@koa/cors");
// const ethers = require('ethers');
// const PaymentProcessor = require('./../build/contracts/PaymentProcessor.json');



const connection = require("./db");
const itemIdRoutes = require("./routes/itemid.js");
const paymentIdRoutes = require("./routes/paymentid.js");

// const authRoutes = require("./routes/auth.js");
// const userRoutes = require("./routes/user.js");

//////////////
// const listenToEvents = () => {
//     const provider = new ethers.providers.JsonRpcProvider('http://localhost:9545');
//     const networkId = '5777';

//     const paymentProcessor = new ethers.Contract(
//         PaymentProcessor.networks[networkId].address,
//         PaymentProcessor.abi,
//         provider
//     );

//     paymentProcessor.on('PaymentDone', async (payer, amount, payementId, date) => {
//         console.log(`New Payment Received:
//         from ${payer}
//         amount ${amount.toString()}
//         paymentId ${payementId}
//         date ${(new Date(date.toNumber() * 1000)).toLocaleString()}
//         `);

//         const payment = await Payment.findOne({id: payementId.toString()});
//         if(payment) {
//             payment.paid = true;
//             await payment.save();
//         }
//     });
// };



// listenToEvents();

/////////////




// const app = new koa();
// const router = Router();
// const port = 4000

//database connection
connection();

//middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(router.routes());
// app.use(router.allowedMethods());

    



//routes
// app.use(itemIdRoutes.routes());
// app.use(paymentIdRoutes.routes());
app.use('/api/getPaymentId/', paymentIdRoutes);
app.use('/api/getItemUrl/', itemIdRoutes);
app.use('/api/history/', historyRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);



const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));