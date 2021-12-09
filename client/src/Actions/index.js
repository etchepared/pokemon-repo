import axios from "axios";

export const setPokemons = (payload) => async (dispatch) => {
  axios.get("http://localhost:3001/pokemons").then((res) =>
    dispatch({
      type: "SET_POKEMONS",
      payload: res.data,
    })
  );
};

export const sortByName = (order) => {
  return {
    type: "SORT_BY_NAME",
    payload: order,
  };
};

export const sortByStrength = (order) => {
  return {
    type: "SORT_BY_STRENGTH",
    payload: order,
  };
};
