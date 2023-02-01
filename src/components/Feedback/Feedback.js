import propTypes from 'prop-types';
import style from './Feedback.module.css';

export default function Feedback({ options, onLeaveFeedback }) {
  return (
    <div className={style.controls}>
      {options.map(type => (
        <button
          className={style.button}
          key={type}
          onClick={onLeaveFeedback}
          data-type={type}
        >
          {type}
        </button>
      ))}
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
