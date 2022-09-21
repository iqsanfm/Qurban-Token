const express = require('express')
const app = express()
const router = express.Router()
// const Koa = require('koa');
// const Router = require('koa-router');
// const cors = require('@koa/cors');
// const PaymentProcessor = require('../../build/contracts/PaymentProcessor.json');
const { Payment } = require('../models/payment.js');
// const { firebaseapp } = require('../firebase.js');
// const db = firebaseapp.database();


// const app = new express();
// const router = AsyncRouter();
// const router = new Router();

// const app = new Koa();
// const router = new Router();




router.get('/:itemId', async (req, res, next) => {
    const paymentId = (Math.random() * 10000).toFixed(0);
    // db.ref('Payments/').add({
    //     id: paymentId,
    //     itemId: req.params.itemId,
    //     paid: false,
    // },(e)=>{
    //     if(e){
    //         console.log("error uploade firebase");
    //     }else{
    //         console.log("Uploade berhasil");
    // //     };
    // });
    await Payment.create({
        id: paymentId,
        itemId: req.params.itemId,
        paid: true,
        
    });
    res.json ({
        "id" : paymentId

    });
});

module.exports = router;