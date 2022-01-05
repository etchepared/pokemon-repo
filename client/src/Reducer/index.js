const initialState = {
  trappedPokemons: [], //todos
  catchedPokemon: null, //agua // all
  // filteredPokemons: [],
  //first: [{"id":25,"name":"pikachu","image":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png","types":["electric"],"hp":35,"strength":55,"defense":40,"speed":90,"height":4,"weight":60}],
  types: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        trappedPokemons: action.payload,
        catchedPokemon: action.payload,
        // first: action.payload[0],
      };

    case "SORT_BY_NAME":
      let orderedCatchedPokemons = [...state.catchedPokemon];
      orderedCatchedPokemons = orderedCatchedPokemons.sort((a, b) => {
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
        catchedPokemon: orderedCatchedPokemons,
        // first: orderedCatchedPokemons[0],
      };

    case "SORT_BY_STRENGTH":
      let orderByStrength = [...state.catchedPokemon];
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
        //first: orderByStrength[0],
      };

    case "CATCH_POKEMON":
      return { ...state, catchedPokemon: action.payload };

    case "FILTER_BY_TYPE":
      let filterByType = [...state.trappedPokemons];
      if (action.payload === "all") {
        return {
          ...state,
          catchedPokemon: filterByType,
          //first: filterByType[0],
        };
      }

      let filteredByType = filterByType.filter((f) => {
        return f.types.includes(action.payload);
      });

      return {
        ...state,
        catchedPokemon: filteredByType,
        //first: filterByType[0],
      };

    case "FILTER_CREATED":
      let allPokemons = [...state.trappedPokemons];
      if (action.payload === "all") {
        return {
          ...state,
          catchedPokemon: allPokemons,
          //first: allPokemons[0],
        };
      }
      if (action.payload === "api") {
        let api = allPokemons.filter((f) => {
          return !f.id.length;
        });
        return {
          ...state,
          catchedPokemon: api,
          //first: api[0],
        };
      }
      let filtered = allPokemons.filter((f) => {
        return f.id.length > 5;
      });
      return {
        ...state,
        catchedPokemon: filtered,
        //first: filtered[0],
      };

    case "POKEMON_DETAIL":
      if (state.catchedPokemon) {
        let detail = [...state.trappedPokemons, ...state.catchedPokemon];
        detail = detail.find((p) => p.id === action.payload);

        return { ...state, catchedPokemon: detail };
      }
      let detail = [...state.trappedPokemons];
      detail = detail.find((p) => p.id === action.payload);

      return { ...state, catchedPokemon: detail };

    case "POKEMON_TYPES":
      return { ...state, types: action.payload };

    default:
      return state;
  }
};
