const { Router } = require("express");
const { Pokemon, Type } = require("../db");
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
        include: [{ model: Type, attributes: ["name"] }],
      });

      if (myPokemons) {
        return res.json({
          name: myPokemons.name,
          id: myPokemons.id,
          hp: myPokemons.hp,
          strength: myPokemons.strength,
          defense: myPokemons.defense,
          speed: myPokemons.speed,
          height: myPokemons.height,
          weight: myPokemons.weight,
          image: myPokemons.image,
          types: myPokemons.types.map((p) => {
            return p.name;
          }),
        });
      }

      const pokemonChosen = await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${lowerCaseName}`)
        .then((d) => d.data)
        .catch((error) => error);

      const pokeInfo = {
        id: pokemonChosen.id,
        name: pokemonChosen.name,
        image: pokemonChosen.sprites.other["official-artwork"]["front_default"],
        types: pokemonChosen.types.map((p) => {
          return p.type.name;
        }),
        hp: pokemonChosen.stats[0].base_stat,
        strength: pokemonChosen.stats[1].base_stat,
        defense: pokemonChosen.stats[2].base_stat,
        speed: pokemonChosen.stats[5].base_stat,
        height: pokemonChosen.height,
        weight: pokemonChosen.weight,
      };
      return res.json(pokeInfo);
    } catch (error) {
      res.status(400).send({ error: "Pokemon not found" });
    }
  }
  try {
    const apiPokemons = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=40")
      .then((d) => d.data.results);

    const pokeData = apiPokemons.map(async (p) => {
      const temp = await axios.get(p.url);
      if (temp) {
        const pokeInfo = {
          id: temp.data.id,
          name: temp.data.name,
          image: temp.data.sprites.other["official-artwork"]["front_default"],
          types: temp.data.types.map((p) => {
            return p.type.name;
          }),
          hp: temp.data.stats[0].base_stat,
          strength: temp.data.stats[1].base_stat,
          defense: temp.data.stats[2].base_stat,
          speed: temp.data.stats[5].base_stat,
          height: temp.data.height,
          weight: temp.data.weight,
        };
        return pokeInfo;
      }
    });

    const pokeResults = await Promise.all(pokeData);
    
    const dbPokemons = await Pokemon.findAll({
      include: [{ model: Type, attributes: ["name"] }],
    });
    console.log(dbPokemons);
    
    if (dbPokemons.length) {
    

    const myPokemons = dbPokemons.map((p) => {
      return {
        id: p.id,
        image: p.image,
        name: p.name,
        types: p.types.map((t) => {
          return t.name;
        }),
        strength: p.strength,
        hp: p.hp,
        defense: p.defense,
        speed: p.speed,
        height: p.height,
        weight: p.weight,
      }
    }) 

      
      
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
    // if (idPokemon > 0 && idPokemon < 899) {
    if (!isNaN(idPokemon)) {
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
      include: [{ model: Type, attributes: ["name"] }],
    });
    if (myPokemons) {
      return res.json({
        name: myPokemons.name,
        id: myPokemons.id,
        hp: myPokemons.hp,
        strength: myPokemons.strength,
        defense: myPokemons.defense,
        speed: myPokemons.speed,
        height: myPokemons.height,
        weight: myPokemons.weight,
        image: myPokemons.image,
        types: myPokemons.types.map((p) => {
          return p.name;
        }),
      });
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
      const [postTypes, succes] = await Type.findOrCreate({
        where: {
          name: t,
        },
        defaults: { name: t },
      });
      myPokemon.addType(postTypes);
    });

    return res.status(201).send(myPokemon);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
