import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const StatisticItem = ({ label, percentage, col }) => {
  return (
    <li className={s.item} style={{ backgroundColor: col }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
  );
};

export default StatisticItem;
StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  col: PropTypes.string.isRequired,
};
