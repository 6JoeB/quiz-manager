import React, { Component } from "react";
import api from "../api";

import "../App.css";

export default class QuestionList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz: this.props.match.params.quiz,
			questions: [],
			isLoading: false,
		};
	}

	componentDidMount = async () => {
		this.setState({ isLoading: true });

		await api.getQuestionsByQuiz(this.state.quiz).then((response) => {
			this.setState({
				questions: response.data.data,
				isLoading: false,
			});
		});
	};

	deleteQuestionById = async (questionId) => {
		console.log("attempting delete");
		await api.deleteQuestionById(questionId).then((response) => {
			window.alert("Question deleted");
		});
		window.location.reload();
	};

	showOrHideAnswer(id) {
		let el = document.getElementById(id);
		if (el.style.visibility === "visible") {
			el.style.visibility = "hidden";
		} else {
			el.style.visibility = "visible";
		}
	}

	// redirectToUpdateQuizName = async (question) => {
	// 	let href = "/question/update/" + question;
	// 	window.location.href = href;
	// };

	redirectToUpdateQuizName = async (questionId) => {
		let href = "/quizzes/" + questionId + "/edit";
		window.location.href = href;
	};

	render() {
		let quizName = this.state.questions.map((entry) => entry.quiz);

		let tableEntries = this.state.questions.map((entry) => (
			<tr>
				<td className='q-and-a-table__data__vertical-centering'>
					{entry.question}
				</td>
				<td id={entry.question} className='q-and-a-table__data__hidden'>
					{entry.answer}
				</td>
				<td>
					<button
						className='btn btn-primary q-and-a-table__button '
						onClick={() => this.showOrHideAnswer(entry.question)}
					>
						Show/Hide Answer
					</button>
					<button
						className='btn btn-secondary q-and-a-table__button'
						onClick={() => this.redirectToUpdateQuizName(entry._id)}
					>
						Edit
					</button>
					<button
						className='btn btn-danger q-and-a-table__button'
						onClick={() => this.deleteQuestionById(entry._id)}
					>
						Delete
					</button>
				</td>
			</tr>
		));

		return (
			<>
				<div>
					<h2 className='q-and-a-table__header'>Quiz: {quizName[0]}</h2>
					<table className='table q-and-a-table'>
						<thead>
							<tr>
								<th scope='col'>Question</th>
								<th scope='col'>Answer</th>
								<th scope='col'></th>
							</tr>
						</thead>
						<tbody>{tableEntries}</tbody>
					</table>
				</div>
			</>
		);
	}
}
