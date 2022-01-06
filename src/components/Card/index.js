import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Card = ({
  thumbnail,
  title,
  difficulty,
  slug,
}) => (
  <article className="card">
    <img className="card-img" src={thumbnail} alt={title} />
    <div className="card-content">
      <h2 className="card-title">{title}</h2>
      <p className="card-desc">Difficulté : {difficulty}</p>
      <NavLink to={`/recipe/${slug}`} className="card-link">Voir la recette</NavLink>
    </div>
  </article>
);

Card.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Card;
