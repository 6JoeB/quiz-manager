const Question = require("../models/quiz-model");

createQuestion = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			succes: false,
			error: "You must provide a body",
		});
	}

	const question = new Question(body);

	if (!question) {
		return res.status(400).json({ success: false, error: err });
	}

	question
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: question._id,
				message: "Question created",
			});
		})
		.catch((error) => {
			return res.status(400).json({
				error,
				message: "Question not created",
			});
		});
};

updateQuestion = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: "You must provide a body to update",
		});
	}

	Question.findOne({ _id: req.params.question_id }, (err, question) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Question not found",
			});
		}
		question.quiz = body.quiz;
		question.question = body.question;
		question.answer = body.answer;
		question
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: question._id,
					message: "Question updated",
				});
			})
			.catch((error) => {
				return res.status(404).json({
					error,
					message: "Question not updated",
				});
			});
	});
};

getQuestionById = async (req, res) => {
	await Question.find({ _id: req.params.question_id }, (err, question) => {
		if (err) {
			return res.status(400).json({
				success: false,
				error: err,
			});
		}
		if (!question.length) {
			return res.status(404).json({
				success: false,
				error: "question not found",
			});
		}
		return res.status(200).json({
			success: true,
			data: question,
		});
	}).catch((err) => console.log(err));
};

updateQuizName = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			succes: false,
			error: "You must provide a body",
		});
	}

	// Question.update({ quiz: req.params.quiz }, { $set: { "quiz": body.quiz }}, {multi: true})

	Question.find({ quiz: req.params.quiz }, (err, questions) => {
		if (err) {
			return res.status(404).json({
				err,
				message: "Quiz not found",
			});
		}
		questionsList = questions.map((object) => object._id);
		console.log(questionsList);
		return res.status(200).json({
			success: true,
			question: this.questionsList,
			message: "test",
		});
	}).catch((error) => {
		return res.status(404).json({
			error,
			message: "Question not updated",
		});
	});
};

deleteQuestion = async (req, res) => {
	await Question.findOneAndDelete({ _id: req.params.question_id }, (err, question) => {
		if (err) {
			return res.status(400);
		}

		if (!question) {
			return res.status(404).json({
				success: false,
				error: "Question not found",
			});
		}
		return res.status(200).json({
			success: true,
			data: question,
		});
	}).catch((err) => console.log(err));
};

getQuestionsByQuiz = async (req, res) => {
	await Question.find({ quiz: req.params.quiz }, (err, questions) => {
		if (err) {
			return res.status(400).json({
				success: false,
				error: err,
			});
		}
		if (!questions.length) {
			return res.status(404).json({
				success: false,
				error: "Quiz not found",
			});
		}
		return res.status(200).json({
			succes: true,
			data: questions,
		});
	}).catch((err) => console.log(err));
};

getQuizNames = async (req, res) => {
	await Question.find({}, (err, questions) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!questions.length) {
			return res
				.status(404)
				.json({ success: false, error: `Quizzes not found` });
		}
		return res.status(200).json({ success: true, data: questions });
	}).catch((err) => console.log(err));
};

module.exports = {
	createQuestion,
	updateQuestion,
	updateQuizName,
	deleteQuestion,
	getQuestionsByQuiz,
	getQuizNames,
	getQuestionById,
};
