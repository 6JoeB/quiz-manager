import { Router } from 'express';

import QuestionsController from '../controllers/question-controller';

const router = Router();

router.post('/question', QuestionsController.createQuestion);
router.put('/question/:id', QuestionsController.updateQuestion);
router.put('/question/:quiz', QuestionsController.updateQuizName)
router.delete('/question/:id', QuestionsController.deleteQuestion);
router.get('/question/:quiz', QuestionsController.getQuestions);

module.exports = router;