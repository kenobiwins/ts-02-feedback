// import PropTypes from 'prop-types';
import React from 'react';
import { ButtonGroup } from '../../BaseStyles/BaseStyles.styled';
// import { ButtonGroup } from 'BaseStyles/BaseStyles.styled';
import { Button } from './FeedbackOptions.styled';

type IProps = {
  options: string[];
  onLeaveFeedback: (event: React.ChangeEvent) => void;
};

export const FeedbackOptions: React.FC<IProps> = ({
  options,
  onLeaveFeedback,
}: IProps) => {
  return (
    <ButtonGroup>
      {options.map(option => (
        <Button key={option} onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonGroup>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
