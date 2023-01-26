import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import css from './FeedBack.module.css';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote(name) {
    console.log(name);
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percentage = ((good / total) * 100).toFixed(2);
    return Number(percentage);
  }

  dummyFunc = () => console.log('dummy func');

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <p>Please leave feedback</p>

        <button
          type="button"
          onClick={() => {
            this.leaveVote('good');
          }}
        >
          Good
        </button>

        <button
          type="button"
          onClick={() => {
            this.leaveVote('neutral');
          }}
        >
          Neutral
        </button>

        <button
          type="button"
          onClick={() => {
            this.leaveVote('bad');
          }}
        >
          Bad
        </button>

        <p>Statistics</p>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feed back: {positivePercentage}</p>
      </div>
    );
  }
}

export default FeedBack;

// Counter.propTypes = {};
