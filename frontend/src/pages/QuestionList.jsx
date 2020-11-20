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
        // let filteredQuizNames = []
        // for(let i = 0; i < quizNames.length; i++) {
        //     if (!filteredQuizNames.includes(quizNames[i])) {
        //         filteredQuizNames.push(quizNames[i])
        //     }
        // }

        // let quizNamesHTMLTableEntries = ``
        // for (let i = 0; i < filteredQuizNames.length; i++) {
        //     quizNamesHTMLTableEntries += `
        //             <tr>
        //                 <td classPath="quiz-names-table__entry">
        //                     <a href="/question/list/${filteredQuizNames[i]}">${filteredQuizNames[i]}</a>
        //                 </td>
        //             </tr>`
        // }

        return (
            <>
            <div>
                {questionsArray}
                {answersArray}
                {/* <table className="table quiz-names-table">
                    <thead>
                        <tr>
                            <th scope="col">Quiz Name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Parser(quizNamesHTMLTableEntries)}
                    </tbody>
                </table> */}
            </div>
            </>
            
        )
    }
}