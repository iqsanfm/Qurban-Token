// const Koa = require('koa');
// const Router = require('koa-router');
// const cors = require('@koa/cors');
const express = require('express')
const app = express()
const router = express.Router()


// const ethers = require('ethers');
// const PaymentProcessor = require('../../build/contracts/PaymentProcessor.json');
const { Payment } = require('../models/payment.js');
const { Invoice } = require('../models/invoice.js');

// const app = new Koa();
// const router = new Router();

// const app = new express();
// const router = AsyncRouter();
// const router = new Router();

const items = {
    '1': {id: 1, url:'http://urlToDownloadItem1'},
    '2': {id: 2, url:'http://urlToDownloadItem2'},

}



router.get('/:paymentId', async ( req, res, next) => {
    const payment = await Payment.findOne({id: req.params.paymentId});
    console.log(req.params.paymentId);
    console.log(payment);

    if(payment && payment.paid === true) {

        payment.url = items[payment.itemId].url;
        await payment.save();
        
        res.json  ({
            "Url": items[payment.itemId].url
        });
    } else {
        console.log('here');
        res.json   ({
            "url" : '',
        });
    }
});

module.exports = router;




