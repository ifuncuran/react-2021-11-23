import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import {tabsSelector, getRestaurantsSelector} from "../../redux/selectors";

function Restaurants({ restaurants, tabs }) {
  const [activeId, setActiveId] = useState(restaurants[Object.keys(restaurants)[0]].id);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: getRestaurantsSelector(state),
  tabs: tabsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
