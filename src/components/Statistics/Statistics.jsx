import { Container } from 'components/BasicStyled/Container.styled';
import PropTypes from 'prop-types';
import { randColor } from './randColor';
import { StatList, TitleStats } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <section>
        {title && <TitleStats>{title}</TitleStats>}
        <StatList>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li key={id} style={{ backgroundColor: randColor() }}>
                <span>{label}</span>
                <span>{percentage}%</span>
              </li>
            );
          })}
        </StatList>
      </section>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
