const { Router } = require("express");
const { Pokemon, Poketype } = require("../db");
const axios = require("axios");
const router = Router();
const { Sequalize, Op } = require("sequelize");
//IMPORTANTE: Dentro de la Ruta Principal mostrar pokemons traidos de la API y la base de datos. Limitar el resultado a 40 pokemons.
router.get("/pokemons", async (req, res, next) => {
  //Imagen Nombre Tipos
  try {
    let apiPokemons1 = await axios
      //.get("https://pokeapi.co/api/v2/pokemon")
      .get("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((d) => d.data.results);
    //let apiPokemons2 = await axios.get(apiPokemons1.next).then((d) => d.data);
    //let pokeLinks = [...apiPokemons1.results, ...apiPokemons2.results];
    //console.log(pokeLinks);
    // apiPokemons1 y 2 guardarían los primeros 40 pokemons
    // pero necesito entrar a sus links para cargar la info
    // armo un objeto nuevo creadole propiedades con los nombres y datos de los pokemones y devuelvo eso

    const data = apiPokemons1.map(async (p) => {
      const aver = await axios.get(p.url);
      //console.log(aver.data);
      return aver.data;
    });

    const results = await Promise.all(data);
    //console.log(data);

    console.log(results);
    return res.setTimeout(1000).json(results);
  } catch (error) {
    //console.log(error, "este es el error");
    next(error);
  }
});
// let pokeNames = pokeLinks.map(async (p) => {
//   axios
//     .all([await axios.get(`https://pokeapi.co/api/v2/pokemon/${p.name}`)])
//     .then((d) => d.data);
// });
//
// let pokemons = pokeLinks.map(async (p) => {
//   await axios.get(p.url).then(p.data);
//   return p.data;
// });
// console.log(pokemons);

// router.get("/pokemons", async (req, res, next) => {
//   //Imagen Nombre Tipos
//   try {
//     let apiPokemons1 = await axios
//       .get("https://pokeapi.co/api/v2/pokemon")
//       .then((d) => d.data);
//     let apiPokemons2 = await axios
//       .get(apiPokemons1.next)
//       .then((d) => d.data.results);
//     // apiPokemons1 y 2 guardarían los primeros 40 pokemons
//     // pero necesito entrar a sus links para cargar la info
//     // armo un objeto nuevo creadole propiedades con los nombres y datos de los pokemones y devuelvo eso
//     console.log(apiPokemons1);
//     let results1 = apiPokemons1.results.map((p) => {
//       return {
//         name: p.name,
//       };
//     });
//     //console.log(results1);
//     let results2 = apiPokemons2.map((p) => {
//       return {
//         name: p.name,
//       };
//     });
//     res.send(results1.concat(results2));

//     // let apiPokemons = {};
//     // let getPokemons1 = apiPokemons1.results.map((p) => {
//     //   await axios.get(p.url).then((d) => d.data);
//     // });
//     // let getPokemons2 = apiPokemons2.map((p) => {
//     //   await axios.get(p.url).then((d) => d.data);
//     // });
//     // console.log(getPokemons1);
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/pokemons/:idPokemon", async (req, res, next) => {
//   try {
//     const { idPokemon } = req.params;

//     if (parseInt(idPokemon) < 900 && parseInt(idPokemon) > 0) {
//       let pokemonChosen = await axios
//         .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
//         .then((d) => {
//           d.data;
//         });
//       let infoPokemon = {
//         name: pokemonChosen.name,
//         image: pokemonChosen.sprites.other.official-artwork.front_default,
//         types: pokemonChosen.types.map((p) => p.type.name),
//         id: pokemonChosen.id,
//         hp: pokemonChosen.stats[0].base_stat,
//         strength: pokemonChosen.
//         id: pokemonChosen
//         id: pokemonChosen
//         id: pokemonChosen
//         id: pokemonChosen
//         name: p.name,
//       };
//     }

//     res.send();
//   } catch (error) {
//     next(error);
//   }
// });
module.exports = router;
