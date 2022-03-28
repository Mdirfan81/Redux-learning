import { Add_to_cart } from "../constances";
// This function will return the detail of the card.
// The data related to the card or added item.
export const addToCart = (data) => {
  // console.log("Action", data);
  return {
    type: Add_to_cart,
    data: data, //this data is going to reducer.
  };
};

// export const removeToCard = () => {
//   return {
//     type: "remove_To_Product",
//   };
// };
