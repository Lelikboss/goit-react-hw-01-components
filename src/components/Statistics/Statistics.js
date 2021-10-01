import PropTypes from 'prop-types';

import StatisticItem from './StatisticItem';
import s from './Statistics.module.css';

const colorGen = () => {
  let color1 = Math.floor(Math.random() * 255) + 1;
  let color2 = Math.floor(Math.random() * 255) + 1;
  let color3 = Math.floor(Math.random() * 255) + 1;
  return 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            col={colorGen()}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
};

export default Statistics;
