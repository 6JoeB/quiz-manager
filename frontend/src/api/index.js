import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

export const createQuestion = payload => api.post(`/question/create`, payload);
export const getQuestionsByQuiz = quiz => api.get(`/question/list/${quiz}`);
export const getQuestionById = id => api.get(`/question/${id}`);
export const updateQuestionById = (id, payload) => api.put(`/question/update/${id}`, payload);
export const updateQuizName = (quiz, payload) => api.put(`/question/update/${quiz}`, payload);
export const deleteQuestion = id => api.delete(`/question/${id}`);
export const getAllQuizzes = () => api.get(`/quizzes`);

const apis = {
    createQuestion, 
    getQuestionsByQuiz, 
    updateQuestionById, 
    updateQuizName, 
    deleteQuestion,
    getAllQuizzes,
    getQuestionById
};

export default apis;