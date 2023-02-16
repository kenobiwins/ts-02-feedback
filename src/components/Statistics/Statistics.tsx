// import PropTypes from 'prop-types';
import { StatisticsPercentage } from './Statistics.styled';

type IStatistics = {
  bad: number;
  neutral: number;
  good: number;
  total?: number;
  positivePercentage?: number;
};

export const Statistics = ({
  bad,
  neutral,
  good,
  total,
  positivePercentage,
}: IStatistics) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>total: {total}</li>
      <StatisticsPercentage>
        Positive feedback: {positivePercentage}%
      </StatisticsPercentage>
    </ul>
  );
};

// Statistics.propTypes = {
//   bad: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   good: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };
