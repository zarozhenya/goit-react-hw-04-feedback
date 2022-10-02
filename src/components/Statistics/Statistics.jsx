import PropTypes from 'prop-types';

import { List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <li key="good">Good: {good}</li>
      <li key="neutral">Neutral: {neutral}</li>
      <li key="bad">Bad: {bad}</li>
      <li key="total">Total: {total}</li>
      <li key="positivePercentage">Positive feedback: {positivePercentage}%</li>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
