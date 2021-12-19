import {normalizedRestaurants} from '../../fixtures';
import {ADD_COMMENT} from "../constants";

const defaultRestaurants = normalizedRestaurants.reduce(
    (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
    {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, values } = action;

  switch (type) {
    case ADD_COMMENT:

      return {
        ...restaurants,
        [values.restaurantId]: {
          ...restaurants[values.restaurantId],
          reviews: [
              ...restaurants[values.restaurantId].reviews,
              values.reviewId,
              ]
        }
      }
    default:
      return restaurants;
  }
};
