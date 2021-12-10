const initialState = {
  trappedPokemons: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return { ...state, trappedPokemons: action.payload };

    case "SORT_BY_NAME":
      let orderedPokemons = [...state.trappedPokemons];
      orderedPokemons = orderedPokemons.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "A-Z" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "A-Z" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        trappedPokemons: orderedPokemons,
      };

    case "SORT_BY_STRENGTH":
      let orderByStrength = [...state.trappedPokemons];
      orderByStrength = orderByStrength.sort((a, b) => {
        if (action.payload === "MENOR") {
          return a.strength - b.strength;
        }
        //if (action.payload === "MAYOR") {
        return b.strength - a.strength;
        //}
      });
      return {
        ...state,
        trappedPokemons: orderByStrength,
      };

    case "CATCH_POKEMON":
      return { ...state, trappedPokemons: action.payload };

    default:
      return state;
  }
};
