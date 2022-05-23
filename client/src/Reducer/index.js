const initialState = {
  existingPokemons: [],
  filteredPokemons: null,
  types: [],
  detail: ["Aquí no hay nada"],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        existingPokemons: action.payload,
        filteredPokemons: action.payload,
      };

    case "RESET_POKEMONS":
      return {
        ...state,
        existingPokemons: [],
        filteredPokemons: null,
      };

    case "SORT_POKEMONS":
      let sortPokemons = [...state.filteredPokemons];
      sortPokemons = sortPokemons.sort((a, b) => {
        if (action.payload === "A-Z" || action.payload === "Z-A") {
          if (a.name < b.name) {
            return action.payload === "A-Z" ? -1 : 1;
          }
          if (a.name > b.name) {
            return action.payload === "A-Z" ? 1 : -1;
          }
        }
        if (action.payload === "MENOR") {
          return a.strength - b.strength;
        }
        if (action.payload === "MAYOR") {
          return b.strength - a.strength;
        }
        return (sortPokemons = [...state.filteredPokemons]);
      });
      return {
        ...state,
        filteredPokemons: sortPokemons,
      };

    case "CATCH_POKEMON":
      return { ...state, filteredPokemons: action.payload };

    case "FILTER_BY_TYPE":
      let filterByType = [...state.existingPokemons];
      if (action.payload === "all") {
        return {
          ...state,
          filteredPokemons: filterByType,
        };
      }

      let filteredByType = filterByType.filter((f) => {
        return f.types.includes(action.payload);
      });

      return {
        ...state,
        filteredPokemons: filteredByType,
      };

    case "FILTER_CREATED":
      let allPokemons = [...state.existingPokemons];
      if (action.payload === "all") {
        return {
          ...state,
          filteredPokemons: allPokemons,
        };
      }
      if (action.payload === "api") {
        let apiPokemons = allPokemons.filter((f) => {
          return !f.id.length;
        });
        return {
          ...state,
          filteredPokemons: apiPokemons,
        };
      }
      let created = allPokemons.filter((f) => {
        return f.id.length > 5;
      });
      return {
        ...state,
        filteredPokemons: created,
      };

    case "POKEMON_DETAIL":
      // if (state.filteredPokemons) {
      //   let detail = [...state.existingPokemons, ...state.filteredPokemons];
      //   detail = detail.find((p) => p.id === action.payload);

      //   return { ...state, filteredPokemons: detail };
      // }
      // let detail = [...state.existingPokemons];
      // detail = detail.find((p) => p.id === action.payload);

      // return { ...state, filteredPokemons: detail };
      return { ...state, detail: action.payload };

    case "POKEMON_TYPES":
      return { ...state, types: action.payload };

    default:
      return state;
  }
};
