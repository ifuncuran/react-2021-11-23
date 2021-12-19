import {normalizedReviews} from '../../fixtures';
import {ADD_COMMENT} from "../constants";

const defaultReviews = normalizedReviews.reduce(
    (acc, review) => ({ ...acc, [review.id]: review }),
    {}
);

export default (reviews = defaultReviews, action) => {
  const { type, values } = action;

  switch (type) {
    case ADD_COMMENT:
      return { ...reviews, [values.reviewId]: {
          id: values.reviewId,
          rating: values.rating,
          text: values.text,
          userId: values.userId,
        }};
    default:
      return reviews;
  }
};
