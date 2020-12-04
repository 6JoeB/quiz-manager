import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3000/api",
});

export const getAllQuizzes = () => api.get(`/quizzes`);
export const createQuestion = (payload) => api.post(`/quizzes`, payload);
export const getQuestionsByQuiz = (quiz) => api.get(`/quizzes/${quiz}`);
export const updateQuestionById = (id, payload) => api.put(`/question/update/${id}`, payload);
export const getQuestionById = (id) => api.get(`/question/${id}`);
export const deleteQuestion = (id) => api.delete(`/question/${id}`);
//export const updateQuizName = (quiz, payload) => api.put(`/question/update/${quiz}`, payload);

const apis = {
	createQuestion,
	getQuestionsByQuiz,
	updateQuestionById,
	deleteQuestion,
	getAllQuizzes,
	getQuestionById,
};

//updateQuizName,

export default apis;
