import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import NavBar from "../components/Navbar";
import {
	Homepage,
	QuestionCreate,
	QuestionList,
	QuestionUpdate,
	QuizUpdate,
	QuizzesList,
} from "../pages/index";

function App() {
	const { isLoading } = useAuth0();

	if (isLoading) return <div>Loading... </div>;

	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path='/' exact component={Homepage} />
				<Route path='/quizzes/new' exact component={QuestionCreate} />
				<Route path='/quizzes/:quiz' exact component={QuestionList} />
				<Route path='/question/update/:id' exact component={QuestionUpdate} />
				<Route path='/update/:quiz' exact component={QuizUpdate} />
				<Route path='/quizzes' exact component={QuizzesList} />
			</Switch>
		</Router>
	);
}

//<Route path='/quizzes/:question-id/edit' exact component={QuestionUpdate} />
export default App;
