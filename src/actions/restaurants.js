export const addRestaurant = (restaurant) => {
  // debugger
  console.log("in action")
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};
