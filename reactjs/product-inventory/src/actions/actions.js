import { ADD_PRODUCT, DELETE_PRODUCT } from "./actionsType";

export const add_product = (data) => {
  console.log(data);
  return {
    type: ADD_PRODUCT,
    data,
  };
};

export const delete_product = (id) => {
  return {
    type: DELETE_PRODUCT,
    id: id,
  };
};
