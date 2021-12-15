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

export function catchPokemon(search) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/pokemons?name=${search}`)
      .then((res) => {
        dispatch({
          type: "CATCH_POKEMON",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error, "Pokemon not found");
      });
  };
}

export const filterByType = (typeSelected) => {
  return {
    type: "FILTER_BY_TYPE",
    payload: typeSelected.toLowerCase(),
  };
};

export const filterCreated = (selected) => {
  return {
    type: "FILTER_CREATED",
    payload: selected.toLowerCase(),
  };
};

export const selectedPokemon = (selected) => async (dispatch) => {
  axios
    .get(`http://localhost:3001/pokemons/${selected}`)
    .then((res) =>
      dispatch({
        type: "POKEMON_DETAIL",
        payload: res.data.id,
      })
    )
    .catch((error) => {
      console.log(error, "Pokemon not found");
    });
};
