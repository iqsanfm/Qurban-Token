const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema({

    Url: String,

});

const Invoice = mongoose.model('invoice', InvoiceSchema);

module.exports = { Invoice };