import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import style from './App.module.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };

  const onClickButton = event => {
    const { id } = event.target;
    switch (id) {
      case '1':
        setGood(prevGood => prevGood + 1);
        break;
      case '2':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case '3':
        setBad(prevBad => prevBad + 1);
        break;

      default:
    }
  };

  const total = countTotalFeedback();

  return (
    <div className={style.box}>
      <div className={style.conteuner}>
        <Section title="Please leave feetback">
          <Feedback onLeaveFeedback={onClickButton}></Feedback>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification sms="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          )}
        </Section>
      </div>
    </div>
  );
};

export { App };
