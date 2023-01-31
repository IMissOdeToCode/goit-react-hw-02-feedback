import React, { Component } from 'react';

// import Counter from './Counter/Counter';
import Section from './FeedBack/Section';
import FeedbackOptions from './FeedBack/FeedbackOptions';
import Statistics from './FeedBack/Statistics';
import Notification from './FeedBack/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote(name) {
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
    const total = this.countTotalFeedback();
    const { good } = this.state;

    if (!total) {
      return 0;
    }

    const percentage = ((good / total) * 100).toFixed();
    return Number(percentage);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={options}
              onClick={this.leaveVote.bind(this)}
            />
          }
        />

        <Section
          title={'Statistics'}
          children={
            <>
              {total > 0 ? (
                <Statistics
                  good={this.state.good}
                  neutral={this.state.neutral}
                  bad={this.state.bad}
                  total={total}
                  positivePercentage={positivePercentage}
                />
              ) : (
                <Notification message={'There is no feedback'} />
              )}
            </>
          }
        />
      </>
    );
  }
}

export default App;
