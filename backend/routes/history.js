const express = require('express')
const app = express()
const router = express.Router()
const { Payment } = require('../models/payment.js');


router.get("/", async ( req, res, next) => {
        const history = await Payment.find();
        res.json(
            history
        );

});


module.exports =  router ;