import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3000/api',
});

export const insertQuestion = payload => api.post(`/question`, payload);
export const getQuestionsByQuiz = quiz => api.get(`/question/${quiz}`);
export const updateQuestionById = (id, payload) => api.put(`/question/${id}`, payload);
export const updateQuizName = (quiz, payload) => api.put(`./question/${quiz}`, payload);
export const deleteQuestion = id => api.delete(`/question/${id}`);

const apis = {
    insertQuestion, 
    getQuestionsByQuiz, 
    updateQuestionById, 
    updateQuizName, 
    deleteQuestion
};

export default apis;