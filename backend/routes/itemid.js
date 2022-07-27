const Koa = require('koa');
const Router = require('koa-router');


// const cors = require('@koa/cors');
// const ethers = require('ethers');
const PaymentProcessor = require('../../build/contracts/PaymentProcessor.json');
const { Payment } = require('../models/payment.js');


const app = new Koa();
const router = new Router();




router.get('/api/getPaymentId/:itemId', async (ctx, next) => {
    const paymentId = (Math.random() * 10000).toFixed(0);
    await Payment.create({
        id: paymentId,
        itemId: ctx.params.itemId,
        paid: false,
    });
    ctx.body = {
        paymentId

    };
});

module.exports = router;