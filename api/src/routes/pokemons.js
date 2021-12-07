const { Router } = require("express");
const { Pokemon, Poketype } = require("../db");
const axios = require("axios");
const router = Router();
const { Sequalize, Op } = require("sequelize");
//IMPORTANTE: Dentro de la Ruta Principal mostrar pokemons traidos de la API y la base de datos. Limitar el resultado a 40 pokemons.
router.get("/pokemons", async (req, res, next) => {
  //Imagen Nombre Tipos

  if (req.query.name) {
    const { name } = req.query;
    const lowerCaseName = name.toLowerCase();

    try {
      const myPokemons = await Pokemon.findOne({
        where: {
          name: { [Op.like]: lowerCaseName },
        },
        include: [{ model: Poketype, attributes: ["name"] }],
      });
      if (myPokemons) {
        return res.json(myPokemons);
      }

      const pokemonChosen = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
        .then((d) => d.data)
        .catch((error) => error);

      const pokeInfo = {
        id: pokemonChosen.id,
        name: pokemonChosen.name,
        image: pokemonChosen.sprites.other["dream_world"]["front_default"],
        types: pokemonChosen.types.map((p) => p.type.name),
        hp: pokemonChosen.stats[0].base_stat,
        strength: pokemonChosen.stats[1].base_stat,
        defense: pokemonChosen.stats[2].base_stat,
        speed: pokemonChosen.stats[5].base_stat,
        height: pokemonChosen.height,
        weight: pokemonChosen.weight,
      };
      return res.json(pokeInfo);
    } catch (error) {
      res.status(400).send("Pokemon not found");
    }
  }
  try {
    const apiPokemons = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((d) => d.data.results);

    const pokeData = apiPokemons.map(async (p) => {
      const temp = await axios.get(p.url);
      if (temp) {
        const pokeInfo = {
          id: temp.data.id,
          image: temp.data.sprites.other["official-artwork"]["front_default"],
          name: temp.data.name,
          types: temp.data.types.map((p) => p.type.name),
          strength: temp.data.stats[1].base_stat,
        };
        return pokeInfo;
      }
    });

    const pokeResults = await Promise.all(pokeData);

    const dbPokemons = await Pokemon.findAll({
      include: [{ model: Poketype, attributes: ["name"] }],
    });
    console.log(dbPokemons);
    if (dbPokemons.length) {
      const { id, image, name, poketypes, strength } = dbPokemons[0];

      const myPokemons = {
        id,
        image,
        name,
        types: poketypes,
        strength,
      };
      return res.json(pokeResults.concat(myPokemons));
    }

    return res.json(pokeResults);
  } catch (error) {
    next(error);
  }
});

router.get("/pokemons/:idPokemon", async (req, res, next) => {
  const { idPokemon } = req.params;
  //idPokemon.length > 0 && idPokemon.length < 4;
  try {
    if (idPokemon > 0 && idPokemon < 899) {
      const pokemonChosen = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then((d) => d.data);

      const pokeInfo = {
        id: pokemonChosen.id,
        name: pokemonChosen.name,
        image: pokemonChosen.sprites.other["dream_world"]["front_default"],
        types: pokemonChosen.types.map((p) => p.type.name),
        hp: pokemonChosen.stats[0].base_stat,
        strength: pokemonChosen.stats[1].base_stat,
        defense: pokemonChosen.stats[2].base_stat,
        speed: pokemonChosen.stats[5].base_stat,
        height: pokemonChosen.height,
        weight: pokemonChosen.weight,
      };
      return res.json(pokeInfo);
    }
    const myPokemons = await Pokemon.findOne({
      where: {
        id: idPokemon,
      },
      include: [{ model: Poketype, attributes: ["name"] }],
    });
    if (myPokemons) {
      return res.json(myPokemons);
    }
    return res.send("Id not found");
  } catch (error) {
    next(error);
  }
});

router.post("/pokemons/create", async (req, res, next) => {
  try {
    const { name, image, types, hp, strength, defense, speed, height, weight } =
      req.body;

    const myPokemon = await Pokemon.create({
      name: name.toLowerCase(),
      image:
        image ||
        "https://cdn.pixabay.com/photo/2016/07/13/08/31/pokemon-1513925_960_720.jpg",
      hp,
      strength,
      defense,
      speed,
      height,
      weight,
    });
    types.map(async (t) => {
      const [postTypes, succes] = await Poketype.findOrCreate({
        where: {
          name: t,
        },
        defaults: { name: t },
      });
      myPokemon.addPoketype(postTypes);
    });

    return res.status(201).send(myPokemon);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
