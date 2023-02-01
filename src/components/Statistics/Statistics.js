import propTypes from 'prop-types';
import style from './Statistics.module.css';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul className={style.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
}
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
