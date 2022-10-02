import PropTypes from 'prop-types';

import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((name, idx) => (
        <li key={idx}>
          <Button onClick={() => onLeaveFeedback(name)}>{name}</Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
