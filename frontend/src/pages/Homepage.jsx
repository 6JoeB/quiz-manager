import React, { Component } from 'react';
import '../App.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className="text__title">
                <h2>Welcome to the Quiz Manager</h2>
                <p>Please use the nav bar above to guide yourself around the site.</p>
                <iframe src="https://giphy.com/embed/bcKmIWkUMCjVm"  class="giphy-embed welcome-gif" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/animated-hello-waving-bcKmIWkUMCjVm"></a></p>
            </div>
        )
    }
}