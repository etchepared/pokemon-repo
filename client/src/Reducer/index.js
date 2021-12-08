const initialState = {
  trappedPokemons: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, trappedPokemons: action.payload };

    default:
      return state;
  }
};
