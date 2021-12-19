import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;

export const getRestaurantsSelector = createSelector(
    [(state) => state.restaurants],
    (restaurants) => restaurants
)

export const orderProductsSelector = createSelector(
  [productsSelector, orderSelector],
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const tabsSelector = createSelector(
    [restaurantsSelector],
    (restaurants) => Object.keys(restaurants).map(( id ) => ({ id, label: restaurants[id].name }))
)

const restaurantReviewsSelector = (state, props) =>
    props.restaurant.reviews.map((reviewId) => state.reviews[reviewId]);

export const getRestaurantReviewsSelector = createSelector(
    [restaurantReviewsSelector],
    (reviews) => reviews
)

const userSelector = (state, props) =>
    state.users[props.userId]

export const UserNameSelector = createSelector(
    [userSelector],
    (user) => user.name
)

export const amountSelector = createSelector(
    [orderSelector,
        (state, props) => props.id],
    (order, productId) => order[productId] || 0
)

export const productSelector = createSelector(
    [productsSelector,
    (state, props) => props.id],
    (product, productId) => product[productId],
)
