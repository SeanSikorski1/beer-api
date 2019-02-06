const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: [0, 'rating must be a number between 0 and 10 inclusive'],
        max: [10, 'rating must be a number between 0 and 10 inclusive'],
        required: true
    }
});

module.exports = mongoose.model('Beer', BeerSchema)