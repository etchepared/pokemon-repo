const initialState = {
  trappedPokemons: [], //todos
  catchedPokemon: null, //agua // all
  filteredPokemons: [],
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
        catchedPokemon: orderedPokemons,
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
        catchedPokemon: orderByStrength,
      };

    case "CATCH_POKEMON":
      return { ...state, catchedPokemon: action.payload };

    case "FILTER_BY_TYPE":
      let filterByType = [...state.trappedPokemons];
      if (action.payload === "all") {
        return { ...state, catchedPokemon: filterByType };
      }

      let filteredByType = filterByType.filter((f) => {
        return f.types.includes(action.payload);
      });

      return { ...state, catchedPokemon: filteredByType };

    case "FILTER_CREATED":
      let allPokemons = [...state.trappedPokemons];
      if (action.payload === "all") {
        return { ...state, catchedPokemon: allPokemons };
      }
      if (action.payload === "api") {
        let api = allPokemons.filter((f) => {
          return !f.id.length;
        });
        return { ...state, catchedPokemon: api };
      }
      let filtered = allPokemons.filter((f) => {
        return f.id.length > 5;
      });
      return { ...state, catchedPokemon: filtered };

    default:
      return state;
  }
};
