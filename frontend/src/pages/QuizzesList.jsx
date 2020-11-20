import React, { Component } from 'react';
import Parser from 'html-react-parser';
import api from '../api';

import '../App.css';

class OpenQuiz extends Component {
    openQuiz = event => {
        event.preventDefault()
        window.location.href = `/question/${this.props.quiz}`
    }

    render() {
        return <tr onClick={this.openQuiz}></tr>
    }
}

export default class QuizzesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getAllQuizzes().then(response => {
            console.log(response.data.data);
            this.setState({
                quizzes: response.data.data,
                isLoading: false
            })
        });
    };

    render() {
        const { quizzes, isLoading } = this.state;
        
        let quizNames = quizzes.map(question => question.quiz);
        let filteredQuizNames = []
        for(let i = 0; i < quizNames.length; i++) {
            if (!filteredQuizNames.includes(quizNames[i])) {
                filteredQuizNames.push(quizNames[i])
            }
        }

        let quizNamesHTMLTableEntries = ``
        for (let i = 0; i < filteredQuizNames.length; i++) {
            quizNamesHTMLTableEntries += `
                    <tr>
                        <td classPath="quiz-names-table__entry">
                            <a href="/question/list/${filteredQuizNames[i]}">${filteredQuizNames[i]}</a>
                        </td>
                    </tr>`
        }

        return (
            <>
            <div>
                <table className="table quiz-names-table">
                    <thead>
                        <tr>
                            <th scope="col">Quiz Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Parser(quizNamesHTMLTableEntries)}
                    </tbody>
                </table>
            </div>
            </>
            
        )
    }
}