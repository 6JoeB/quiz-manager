const Question = require('../models/question-model');

createQuestion = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            succes: false,
            error: 'You must provide a body',
        })
    }

    const question = new Question(body);

    if (!question) {
        return res.status(400).json({ success: false, error: err});
    }

    question.save().then(() => {
        return res.status(201).json({
            success: true,
            id: question._id,
            message: 'Question created',
        })
    }).catch(error => {
        return res.status(400).json({
            error,
            message: 'Question not created',
        })
    })
}

updateQuestion = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            succes: false,
            error: 'You must provide a body',
        })
    }

    Question.findOne({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Question not found',
            })
        }
        question.question = body.question;
        question.answer = body.answer;
        question.save().then(() => {
            return res.status(200).json({
                success: true,
                id: question._id,
                message: 'Question updated',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'Question not updated'
            });
        });
    });
}

updateQuizName = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            succes: false,
            error: 'You must provide a body',
        })
    }

    Question.findMany({ quiz: req.params.quiz }, (err, question) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Quiz not found',
            })
        }
        question.quiz = body.quiz;
        question.save().then(() => {
            return res.status(200).json({
                success: true,
                id: question._id,
                message: 'Question updated',
            })
        }).catch(error => {
            return res.status(404).json({
                error,
                message: 'Question not updated'
            });
        });
    });

    //or 
    // Question.updateMany({
    //     quiz: { $eq: req.params.quiz }}, 
    //     { 
    //         quiz: req.params.newQuiz 
    //     }, 
    //     function (err, docs) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log("Updated docs: ", docs);
    //     }
    // })
}

deleteQuestion = async (req, res) => {
    await Question.findOneAndDelete({ _id: req.params.id }, (err, question) => {
        if (err) {
            return res.status(400)
        }

        if (!question) {
            return res.status(404).json({
                success: false,
                error: 'Question not found',
            })
        }
        return res .status(200).json({ 
            success: true,
            data: question        
        })
    }).catch(err => console.log(err));
}

getQuestions = async (req, res) => {
    await Question.find({ quiz: req.params.quiz }, (err, questions) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!questions.length) {
            return res.status(404).json({
                success: false,
                error: 'Quiz not found'
            })
        }
        return res.status(200).json({
            succes: true,
            data: questions
        })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestion,
    updateQuestion,
    updateQuizName,
    deleteQuestion,
    getQuestions,
}