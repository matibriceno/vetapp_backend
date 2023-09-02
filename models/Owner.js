const {Schema, model} = require('mongoose');

const OwnerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
})

module.exports = model('Owner', OwnerSchema);