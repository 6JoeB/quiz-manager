import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import Profile from '../components/Profile';
import NavBar from '../components/Navbar';
import { QuestionCreate, QuestionList, QuestionUpdate, QuizUpdate } from '../pages/index';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading... </div>

  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/question/create" exact component={QuestionCreate}/>
        <Route path="/question/list/:quiz" exact component={QuestionList}/>
        <Route path="/question/update/:id" exact component={QuestionUpdate}/>
        <Route path="/question/update/:quiz" exact component={QuizUpdate}/>
      </Switch>
      <Profile/>
    </Router>
  );
}

export default App;