import React, { Component } from 'react';
import api from '../api';
import '../App.css';

export default class QuestionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: "",
            question: "",
            answer: ""
        }
    }

    handleChangeInputQuizName = async event => {
        const quiz = event.target.value
        this.setState({ quiz })
    }

    handleChangeInputQuestion = async event => {
        const question = event.target.value
        this.setState({ question })
    }

    handleChangeInputAnswer = async event => {
        const answer = event.target.value
        this.setState({ answer })
    }

    handleCreateQuestion = async () => {
        const { quiz, question, answer } = this.state;
        const payload = { quiz, question, answer };

        await api.createQuestion(payload).then(res => {
            window.alert(`Question created successfully`);
            this.setState({
                quiz: "",
                question: "",
                answer: ""
            })
        })
    }

    render() {
        const { quiz, question, answer } = this.state;
        return (
            <div className="form-container">
                <h2>Create a Question: </h2>
                <label className="input-box">Quiz Name: </label>
                <input className="form-control input-box" onChange={this.handleChangeInputQuizName} value={quiz}></input>
                <label className="input-box">Question: </label>
                <input className="form-control input-box" onChange={this.handleChangeInputQuestion} value={question}></input>
                <label className="input-box">Answer: </label>
                <input className="form-control input-box" onChange={this.handleChangeInputAnswer} value={answer}></input>
                <button className="btn btn-primary button" onClick={this.handleCreateQuestion}>Add Question</button>
                <a className="btn btn-danger button" href="/quizzes">Cancel</a>
            </div>
        )
    }
}