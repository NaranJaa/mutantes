import express = require('express');
import { isMutant } from './mutantes.controllers';

const router: express.Router = express.Router();

router.post('/isMutant', isMutant);

module.exports = router;

/*
    cosas asumidas:
    1- solo verificar oblicuos hacia la derecha tanto en la parte superior como inferior de la matriz
    2- Es mutante si existe mas de 4 letras iguales en secuencia inclusive
*/