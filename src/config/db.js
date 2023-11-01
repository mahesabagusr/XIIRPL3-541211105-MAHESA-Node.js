
const mongoose = require('mongoose');

const mongoInit = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017');
}

module.exports = { mongoInit }