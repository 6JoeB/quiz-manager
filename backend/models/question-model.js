const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Question = new Schema(
    {
        quiz: { type: String, required: true },
        question: { type: String, required: true },
        answer: { type: String, required: true }
    }
)

module.exports = mongoose.model('questions_and_answers', Question);