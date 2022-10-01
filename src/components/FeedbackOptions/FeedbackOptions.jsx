import { List, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map((name, idx) => (
        <li key={idx}>
          <Button onClick={() => onLeaveFeedback(name)}>{name}</Button>
        </li>
      ))}
    </List>
  );
};
