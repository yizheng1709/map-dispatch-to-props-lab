export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      console.log("in reducer of ADD_RESTAURANT")
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      console.log("in reducer of default")
      return state;

  }
};
