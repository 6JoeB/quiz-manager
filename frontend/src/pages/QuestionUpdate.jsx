import React, { Component } from "react";
import api from "../api";
import "../App.css";

export default class QuestionUpdate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz: "",
			question: "",
			answer: "",
			id: this.props.match.params.id,
		};
	}

	componentDidMount = async () => {
		await api.getQuestionById(this.state.id).then((response) => {
			console.log(response);
			console.log("update question page");
			this.setState({
				quiz: response.data.data[0].quiz,
				question: response.data.data[0].question,
				answer: response.data.data[0].answer,
			});
		});
	};

	handleChangeInputQuizName = async (event) => {
		const quiz = event.target.value;
		this.setState({ quiz });
	};

	handleChangeInputQuestion = async (event) => {
		const question = event.target.value;
		this.setState({ question });
	};

	handleChangeInputAnswer = async (event) => {
		const answer = event.target.value;
		this.setState({ answer });
	};

	handleUpdateQuestion = async () => {
		const { quiz, question, answer } = this.state;
		const payload = { quiz, question, answer };
		console.log(payload);
		const questionId = this.state.id;

		await api.updateQuestionById(questionId, payload).then((res) => {
			window.alert(`Question Updated successfully`);
		});
		this.redirectToQuiz(this.state.quiz);
	};

	redirectToQuiz = async (quiz) => {
		let href = "/quizzes/" + quiz;
		window.location.href = href;
	};

	render() {
		const { quiz, question, answer } = this.state;
		return (
			<div className='form-container'>
				<h2>Update Question: </h2>
				<label className='input-box'>Quiz Name: </label>
				<input
					className='form-control input-box'
					onChange={this.handleChangeInputQuizName}
					value={quiz}
				></input>
				<label className='input-box'>Question: </label>
				<input
					className='form-control input-box'
					onChange={this.handleChangeInputQuestion}
					value={question}
				></input>
				<label className='input-box'>Answer: </label>
				<input
					className='form-control input-box'
					onChange={this.handleChangeInputAnswer}
					value={answer}
				></input>
				<button
					className='btn btn-primary button'
					onClick={this.handleUpdateQuestion}
				>
					Update Question
				</button>
				<button
					className='btn btn-danger button'
					onClick={() => this.redirectToQuiz(this.state.quiz)}
				>
					Cancel
				</button>
			</div>
		);
	}
}
