const express = require('express')

const QuestionsController = require('../controllers/question-controller');

const router = express.Router();

router.post('/question', QuestionsController.createQuestion);
router.put('/question/:id', QuestionsController.updateQuestion);
router.put('/question/:quiz', QuestionsController.updateQuizName)
router.delete('/question/:id', QuestionsController.deleteQuestion);
router.get('/question/:quiz', QuestionsController.getQuestions);
router.get('/quizzes', QuestionsController.getQuizNames);

module.exports = router;