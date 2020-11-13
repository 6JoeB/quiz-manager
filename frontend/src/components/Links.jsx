import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Links extends Component {
    render() {
        return (
            <>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="navbar-brand navbar-title">
                            Quiz manager
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/quizzes" className="nav-link">
                            Quizzes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/question/create" className="nav-link">
                            Create Question/Quiz
                        </Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default Links;