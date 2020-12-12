import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/actionsType";

const initialState = {
  products: [
    {
      id: 2233,
      name: "Nike",
      price: 3434,
    },
  ],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("add product case");
      return {
        ...state,
        products: [...state.products, action.data],
      };

    default:
      console.log(state);
      return {
        ...state,
      };
  }
};

export default reducers;

// case ADD_PRODUCT:
//   console.log(action.data);
//   return {
//     ...state,
//     products: [...state.products, action.data],
//   };
// case DELETE_PRODUCT:
//   const allProducts = state.products.filter(
//     (product) => product.id !== action.id
//   );
//   return {
//     ...state,
//     products: allProducts,
//   };
