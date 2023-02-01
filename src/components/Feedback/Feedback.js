import propTypes from 'prop-types';
import style from './Feedback.module.css';

export default function Feedback({ onLeaveFeedback }) {
  return (
    <div className={style.controls}>
      <button
        type="button"
        id="1"
        className={style.button}
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        type="button"
        id="2"
        className={style.button}
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        type="button"
        id="3"
        className={style.button}
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
}
Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
Feedback.defaultProps = {
  options: [],
};
