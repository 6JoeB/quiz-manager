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

    showOrHideAnswer(id) {
        let el = document.getElementById(id)
        if (el.style.visibility == "visible") {
            el.style.visibility = "hidden";
        } else {
            el.style.visibility = "visible";
        }
    }

    render() {
        let tableEntries = this.state.questions.map((entry) =>
            <tr>
                <td className="q-and-a-table__data">
                    {entry.question}
                </td>
                <td id={entry.question} className="q-and-a-table__data__hidden">
                    {entry.answer}
                </td>
                <td>
                    <button className="q-and-a-table__button" onClick={() => this.showOrHideAnswer(entry.question)}>Show/Hide Answer</button>
                </td>
            </tr>
        )

        return (
            <>
            <div>
                <table className="table q-and-a-table">
                    <thead>
                        <tr>
                            <th scope="col">Question</th>
                            <th scope="col">Answer</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableEntries}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}