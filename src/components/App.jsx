import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const values = Object.values(this.state);
    const total = values.reduce(
      (prevSum, currentValue) => prevSum + currentValue,
      0
    );
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const positiveFeedback = this.state.good;
    const total = this.countTotalFeedback();
    return total === 0
      ? 0
      : Number(((positiveFeedback / total) * 100).toFixed(0));
  };
  addFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good === 0 && bad === 0 && neutral === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}
