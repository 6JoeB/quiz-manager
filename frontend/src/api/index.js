import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
});

export const getAllQuizzes = () => api.get(`/quizzes`);
export const createQuestion = (payload) => api.post(`/quizzes`, payload);
export const getQuestionsByQuiz = (quiz) => api.get(`/quizzes/${quiz}`);
export const updateQuestionById = (question_id, payload) => api.put(`/quizzes/${question_id}/edit`, payload);
export const getQuestionById = (question_id) => api.get(`/quizzes/questions/${question_id}`);
export const deleteQuestionById = (question_id) => api.delete(`/quizzes/${question_id}`);
//export const updateQuizName = (quiz, payload) => api.put(`/question/update/${quiz}`, payload);

const apis = {
	createQuestion,
	getQuestionsByQuiz,
	updateQuestionById,
	deleteQuestionById,
	getAllQuizzes,
	getQuestionById,
};

//updateQuizName,

export default apis;
