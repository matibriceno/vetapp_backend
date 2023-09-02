const {Schema, model} = require('mongoose');

const AppointmentDateSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Owner',
        required: true
    },
    pet: {
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    },
    dateType: {
        type: String,
        required: true,
    }
})

module.exports = model('AppointmentDate', AppointmentDateSchema);