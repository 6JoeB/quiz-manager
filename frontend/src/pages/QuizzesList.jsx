import React, { Component } from 'react';
import api from '../api';
import '../App.css';

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
            });
        });
    };

    redirectToUpdateQuizName = async (quiz) => {
        let href = "/update/" + quiz;
        window.location.href = href
    }

    redirectToQuiz = async (quiz) => {
        let href = "/question/list/" + quiz;
        window.location.href = href;
    }

    render() {
        const { quizzes } = this.state;

        let quizNames = quizzes.map(question => question.quiz);
        
        let filteredQuizNames = []
        for(let i = 0; i < quizNames.length; i++) {
            if (!filteredQuizNames.includes(quizNames[i])) {
                filteredQuizNames.push(quizNames[i])
                console.log(quizNames[i])
            }
        }

        let quizNamesHTMLTableEntries = filteredQuizNames.map(quizName => 
            <tr>
                <td className="q-and-a-table__data__vertical-centering">
                    <button className='btn' href="#" onClick={() => this.redirectToQuiz(quizName)}>{quizName}</button>
                </td>
                {/* <td>
                    <button onClick={() => this.redirectToUpdateQuizName(quizName)} className="btn btn-primary button__shadow">Update Name</button>
                </td> */}
            </tr>
            )

        return (
            <>
            <div>
                <h2 className="text__title">Available Quizzes: </h2>
                <table className="table quiz-names-table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            {/* <th className="buttons-th__set-width"scope="col"></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {quizNamesHTMLTableEntries}
                    </tbody>
                </table>
            </div>
            </>
            
        )
    }
}