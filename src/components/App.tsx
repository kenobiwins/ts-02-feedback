import { Component } from 'react';
import React from 'react';

import { Container } from '../BaseStyles/BaseStyles.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NotificationMessage } from './NotificationMessage/NotificationMessage';

type IState = {
  good: number;
  neutral: number;
  bad: number;
};

export class App extends Component<{}, IState> {
  state: IState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e: React.ChangeEvent<Element>) => {
    const key: string | null = e.target.textContent;

    if (!key) return;
    this.setState(prevState => {
      switch (key) {
        case 'good':
          return { ...prevState, good: prevState['good'] + 1 };
        case 'neutral':
          return { ...prevState, neutral: prevState['neutral'] + 1 };
        case 'bad':
          return { ...prevState, bad: prevState['bad'] + 1 };
        default:
          break;
      }
    });
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);

    if (total) {
      return total;
    }
  };

  countPositiveFeedbackPercentage = () => {
    const total: number | undefined = this.countTotalFeedback();
    if (!total) {
      return;
    }
    // console.log(total);
    const possitiveValue = [this.state].reduce((acc, el) => {
      acc += el['good'];
      return acc;
    }, 0);

    const result = (possitiveValue / total) * 100;
    if (!result) {
      return this.state.good;
    }
    return Math.round(result);
  };

  render() {
    const { bad, neutral, good } = this.state;
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              // states={this.state}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage message={'There is no feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}
