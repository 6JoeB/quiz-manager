import React, { Component } from 'react';
import Parser from 'html-react-parser';
import api from '../api';

import '../App.css';

export default class QuestionList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: this.props.match.params.quiz,
            questions: [],
            isLoading: false
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true });

        await api.getQuestionsByQuiz(this.state.quiz).then(response => {
            console.log(response.data.data);
            this.setState({
                questions: response.data.data,
                isLoading: false
            });
        });
    };

    render() {
        const { questions, isLoading } = this.state;
        let questionsArray = questions.map(dbObject => dbObject.question);
        let answersArray = questions.map(dbObject => dbObject.answer);

        let questionsAndAnswersHTMLTableEntries = ``
        for(let i = 0; i < questionsArray.length; i++) {
            questionsAndAnswersHTMLTableEntries += 
            `<tr>
                <td classPath="question-and-answers-table__entry">
                    ${questionsArray[i]}
                </td>
                <td classPath="question-and-answers-table__entry">
                    ${answersArray[i]}
                </td>
            </tr>`
        }

        return (
            <>
            <div>
                <table className="table questions-and-answers-table">
                    <thead>
                        <tr>
                            <th scope="col">Question</th>
                            <th scope="col">Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Parser(questionsAndAnswersHTMLTableEntries)}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}