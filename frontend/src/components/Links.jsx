import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <>
                <Link to="/" className="navbar-brand">
                    Quiz manager
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/question/quiz" className="nav-link">
                                Quizzes
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/question" className="nav-link">
                                Create Question/Quiz
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </>
        )
    }
}

export default Links