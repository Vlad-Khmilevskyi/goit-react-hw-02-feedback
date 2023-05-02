import React from 'react';
import css from './Feedback.module.css';

class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    buttonGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    buttonNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    buttonBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <button type="button" onClick={this.buttonGood}>
                    Good
                </button>
                <button type="button" onClick={this.buttonNeutral}>
                    Neutral
                </button>
                <button type="button" onClick={this.buttonBad}>
                    Bad
                </button>

                <h2>Statistics</h2>

                <div className={css.statistics}>
                    <span>Good: {this.state.good}</span>
                    <span>Neutral: {this.state.neutral}</span>
                    <span>Bad: {this.state.bad}</span>
                </div>
            </div>
        );
    }
}

export default Feedback;
