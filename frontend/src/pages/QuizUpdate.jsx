import React, { Component } from 'react';
import api from '../api';
import '../App.css';

export default class QuizUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            originalQuizName: this.props.match.params.quiz,
            quizName: this.props.match.params.quiz
        }        
    }

    handleChangeInputQuizName = async event => {
        const quizName = event.target.value;
        this.setState({ quizName });
    }

    handleUpdateQuizName = async () => {
        const { quizName, originalQuizName } = this.state;
        const payload = { quizName }
        console.log(quizName)
        console.log(originalQuizName)

        await api.updateQuizName(originalQuizName, payload).then(res => {
            window.alert(`Quiz name updated`)
            console.log("udpated")
        })
    }

    render() {
        return (
            <div className="form-container">
                <h2>Update quiz: </h2>
                <label className="input-box">Rename Quiz: </label>
                <input className="form-control input-box" onChange={this.handleChangeInputQuizName} value={this.state.quizName}></input>
                <button className="btn btn-primary button button__shadow" onClick={this.handleUpdateQuizName}>Update</button>
                <a className="btn btn-danger button button__shadow" href="/quizzes">Cancel</a>
            </div>
        )
    }
}