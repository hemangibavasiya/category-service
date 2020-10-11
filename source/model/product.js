const mongoose = require('mongoose')

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    description: {
        type: String,
        required: true,
        max: 255,
        min: 6  
    },
    category: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
productShema.plugin(global.db.autoIncrement.plugin, {
    model: 'product',
    field: 'id',
    startAt: 1
})
module.exports = global.db.connection.model('product', productShema)
