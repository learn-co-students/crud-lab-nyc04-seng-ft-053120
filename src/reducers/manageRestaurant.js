import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, { ...action.payload, id: cuid() }],
      };

    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)
      }

    case 'ADD_REVIEW':
      return {
        ...state,
        reviews: [...state.reviews, { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }]
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    default:
      return state;
  }
}
