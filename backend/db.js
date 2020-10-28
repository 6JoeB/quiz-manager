const mongoose = require('mongoose')
const uri = "mongodb://admin:password@127.0.0.1:28017/quiz-manager?authSource=admin&readPreference=primary";

mongoose
    .connect(uri, { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db