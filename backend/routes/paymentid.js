const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const ethers = require('ethers');
const PaymentProcessor = require('../../build/contracts/PaymentProcessor.json');
const { Payment } = require('../models/payment.js');


const app = new Koa();
const router = new Router();

// const items = {
//     '1': {id: 1, url:'http://urlToDownloadItem1'},
//     '2': {id: 2, url:'http://urlToDownloadItem2'},

// }


// router.get('/api/itemId', async (ctx, next) => {
//     const paymentId = (Math.random() * 10000).toFixed(0);
//     await Payment.create({
//         id: paymentId,
//         itemId: ctx.params.itemId,
//         paid: false,
//     });
//     ctx.body = {
//         paymentId

//     };
// });

router.get('/api/getItemUrl/:paymentId', async (ctx, next) => {
    const payment = await Payment.findOne({id: ctx.params.paymentId});
    console.log(ctx.params.paymentId);
    console.log(payment);

    if(payment && payment.paid === true) {
        ctx.body = {
            Url: items[payment.itemId].url
        };
    } else {
        console.log('here');
        ctx.body = {
            url: '',
        };
    }
});

module.exports = router;




