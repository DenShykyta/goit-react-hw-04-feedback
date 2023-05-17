import { useState } from 'react';
import Statistics from './FeedBackApp/Statistics';
import FeedbackOptions from './FeedBackApp/FeedbackOptions';
import Section from './FeedBackApp/Section';
import Notification from './FeedBackApp/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const keys = [good, neutral, bad];

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return keys.reduce((acc, num) => acc + num, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys({ good, neutral, bad })}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
};

export { App };
