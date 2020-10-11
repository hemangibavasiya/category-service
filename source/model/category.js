const mongoose = require('mongoose')

const categoryShema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
categoryShema.plugin(global.db.autoIncrement.plugin, {
    model: 'category',
    field: 'id',
    startAt: 1
})
module.exports = global.db.connection.model('category', categoryShema)
