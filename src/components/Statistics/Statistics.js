import PropTypes from 'prop-types';
import Notification from './Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return total > 0 ? (
    <>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>tota: {total}</p>
      <p>positive feedback: {positivePercentage}%</p>
    </>
  ) : (
    <Notification message="No feedback given" />
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
