const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const model = Schema(
    {
        name: string,
        require :true
    }
)
//you can use model of data and Export this if you want

module.exports = mongoose.model("model", model);