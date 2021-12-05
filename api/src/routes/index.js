const { Router } = require("express");
const pokemonsRoute = require("./pokemons");
const poketypesRoute = require("./poketypes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(pokemonsRoute);
//router.use(poketypesRoute);

module.exports = router;
