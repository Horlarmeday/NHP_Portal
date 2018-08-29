const mongoose = require("mongoose");
const PurchaseSchema =  new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date of birth: {type: Date},
    marital status: String,
    resident address: String,
    postal address: String,
    contact Number: Number,
    nationality: String,
    state of origin: String,
    LGA: String,
    occupation: String,
    annual income: Number,
    employer: String,
    address of employer: String,
    next of kin: String,
    housetype: String,
    location of choice: String,
    payment details: String,
    mode of purchase: String
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model("Purchase", PurchaseSchema);