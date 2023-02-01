import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import style from './App.module.css';
import { type } from '@testing-library/user-event/dist/type';

const App = () => {
  const [sumStatistics, setSumStatistics] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const countTotalFeedback = () => {
    const { good, neutral, bad } = sumStatistics;
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = countTotalFeedback;
    const total = good + neutral + bad;
    return total !== 0 ? Math.round((100 / total) * good) : 0;
  };
  const onClickButton = type => {
    setSumStatistics(prevState => {
      const value = prevState[type];
      return { ...prevState, [type]: value + 1 };
    });
  };

  const { good, neutral, bad } = countPositiveFeedbackPercentage;

  const total = countTotalFeedback();
  return (
    <div
      style={{
        width: '500px',
        margin: '0 auto',
      }}
    >
      <div className={style.conteuner}>
        <Section title="Please leave feetback">
          <Feedback
            options={Object.keys(sumStatistics)}
            onLeaveFeedback={onClickButton}
          ></Feedback>
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
// class App extends Component {
//   state = { good: 0, neutral: 0, bad: 0 };

//   onClickButton = ({
//     target: {
//       dataset: { type },
//     },
//   }) => {
//     this.setState({ [type]: this.state[type] + 1 });
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total !== 0 ? Math.round((100 / total) * good) : 0;
//   };

//   render() {
//     const {
//       onClickButton,
//       countTotalFeedback,
//       countPositiveFeedbackPercentage,
//     } = this;
//     const { good, neutral, bad } = this.state;

//     const total = countTotalFeedback();
//     return (
//       <div
//         style={{
//           width: '500px',
//           margin: '0 auto',
//         }}
//       >
//         <div className={style.conteuner}>
//           <Section title="Please leave feetback">
//             <Feedback
//               options={Object.keys(this.state)}
//               onLeaveFeedback={onClickButton}
//             ></Feedback>
//           </Section>

//           <Section title="Statistics">
//             {total === 0 ? (
//               <Notification sms="There is no feedback" />
//             ) : (
//               <Statistics
//                 good={good}
//                 neutral={neutral}
//                 bad={bad}
//                 total={total}
//                 positivePercentage={countPositiveFeedbackPercentage()}
//               ></Statistics>
//             )}
//           </Section>
//         </div>
//       </div>
//     );
//   }
// }
export { App };
