"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mutantes_controllers_1 = require("./mutantes.controllers");
const router = express.Router();
router.post('/isMutant', mutantes_controllers_1.isMutant);
module.exports = router;
/*
    cosas asumidas:
    1- solo verificar oblicuos hacia la derecha tanto en la parte superior como inferior de la matriz
    2- Es mutante si existe mas de 4 letras iguales en secuencia inclusive
*/ 
