const express = require("express");

const QuizController = require("../controllers/quiz-controller");

const router = express.Router();

router.get("/quizzes", QuizController.getQuizNames);
router.post("/quizzes", QuizController.createQuestion);
router.get("/quizzes/:quiz", QuizController.getQuestionsByQuiz);
router.put("/quizzes/:question_id/edit", QuizController.updateQuestion);
//router.put("/question/update/:quiz", QuizController.updateQuizName);
router.delete("/quizzes/:question_id", QuizController.deleteQuestion);
router.get("/question/:id", QuizController.getQuestionById);

module.exports = router;
