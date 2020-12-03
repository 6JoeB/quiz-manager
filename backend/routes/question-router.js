const express = require("express");

const QuestionController = require("../controllers/question-controller");

const router = express.Router();

router.post("/question/create", QuestionController.createQuestion);
router.put("/question/update/:id", QuestionController.updateQuestion);
router.put("/question/update/:quiz", QuestionController.updateQuizName);
router.delete("/question/:id", QuestionController.deleteQuestion);
router.get("/question/list/:quiz", QuestionController.getQuestions);
router.get("/quizzes", QuestionController.getQuizNames);
router.get("/question/:id", QuestionController.getQuestionById);

module.exports = router;
