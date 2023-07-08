import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={css.list}>
      <li>
        <p>
          Good: <span className={css.value}>{good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad: <span className={css.value}>{bad}</span>
        </p>
      </li>
      <li>
        <p>
          Total: <span className={css.value}>{total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:
          <span className={css.value}>{positivePercentage}</span>
        </p>
      </li>
    </ul>
  );
}

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
