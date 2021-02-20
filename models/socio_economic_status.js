const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socio_economic_statusSchema = new Schema({
    score: String,
    class: String
});

module.exports = mongoose.model('Status', socio_economic_statusSchema);