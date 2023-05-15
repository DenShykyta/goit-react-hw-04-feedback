import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={css.stat__title}>Statistics</h2>
      <p className={css.stat__item}>Good: {good} </p>
      <p className={css.stat__item}>Neutral: {neutral}</p>
      <p className={css.stat__item}>Bad: {bad}</p>
      <p className={css.stat__item}>Total: {total}</p>
      <p className={css.stat__item}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
