import React, { Component } from 'react';
import '../App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="text__intro">
                <h2>Welcome to the Quiz Manager</h2>
                <p>Please use the nav bar above to guide yourself around the site</p>
            </div>
        )
    }
}