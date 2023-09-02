const {Schema, model} = require('mongoose');

const PetSchema = Schema({
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
    },
    comments: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
})

module.exports = model('Pet', PetSchema);