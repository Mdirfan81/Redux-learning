import { Add_to_cart } from "../constances";
//this array is responsble for taking all the data. when clicked on add_To_Cart.
const initalState = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  // export default function cardItems(state = initalState, action) {
  // console.log("Reducer", action);
  switch (action.type) {
    case Add_to_cart:
      // console.warn("reducer", action.data);
      return [...state, { cardData: action.data }]; // where in this on each click a element will go into the array.

      // return {
      //   ...state,
      //   cardData: action.data, //data is action therefor we are using the data here.
      // }; // this will return single element on each time.
      break;
    case "remove_To_Product":
      state.pop();
      return [...state];
      break;

    default:
      return state;
  }
}
