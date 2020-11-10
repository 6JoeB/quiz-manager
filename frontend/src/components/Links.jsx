import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Links extends Component {
    render() {
        return (
            <>
                <ul class="nav">
                    <li class="nav-item">
                        <Link to="/" className="navbar-brand navbar-title">
                            Quiz manager
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/question/quiz" className="nav-link">
                            Quizzes
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/question" className="nav-link">
                            Create Question/Quiz
                        </Link>
                    </li>
                </ul>
            </>
        )
    }
}

export default Links