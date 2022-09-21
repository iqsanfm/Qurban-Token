const mongoose = require('mongoose');
const ethers = require('ethers');
const PaymentProcessor = require('../../build/contracts/PaymentProcessor.json');

const paymentSchema = new mongoose.Schema({
    email: String,
    id: String,
    itemId: String,
    paid: Boolean,
    url : String,
});

const Payment = mongoose.model('Payment', paymentSchema);



const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider('http://localhost:9545');
    const networkId = '5777';

    const paymentProcessor = new ethers.Contract(
        PaymentProcessor.networks[networkId].address,
        PaymentProcessor.abi,
        provider
    );

    paymentProcessor.on('PaymentDone', async (payer, amount, payementId, date) => {
        console.log(`New Payment Received:
        from ${payer}
        amount ${amount.toString()}
        paymentId ${payementId}
        date ${(new Date(date.toNumber() * 1000)).toLocaleString()}
        `);

        const payment = await Payment.findOne({id: payementId.toString()});
        if(payment) {
            payment.paid = true;
            await payment.save();
        }
    });
};



listenToEvents();


module.exports = { Payment  };