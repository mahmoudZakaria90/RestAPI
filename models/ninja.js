const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Schema
const NinjaSchema = new Schema({
    name: {
        type: String
    },
    rank: {
        type: Number
    },
    available: {
        type: Boolean,
        default: false
    }
})


//Model
const Ninja = mongoose.model('ninjas', NinjaSchema);

module.exports = Ninja;
