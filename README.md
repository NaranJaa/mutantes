# Mutantes
## Detecta mutantes

### Instrucciones:
Hay dos alternativas:

1- Descargar repositorio y correrlo en local.
- Ejecutar en la raíz del proyecto npm i
- Ejecutar con ```npm start```

2- Ejecutar versión hosteada.

#### Para ambos casos seguir con estas instrucciones:

- Utilizando postman o alguna otra herramienta para consumir api rest, probar:

POST/ http://localhost:3000/api/mutant/isMutant
body json:
```
{
"adnSequence":[
    "TTGCGAG",
    "ATTTTAC",
    "GCAAATG",
    "ATCTTAA",
    "AAAGATT",
    "CGTTGTT",
    "ATGCATG"
   ]
}
```
Si se detecta un mutante retornara HTTP 200-OK

De lo contrario 403-Forbidden.

En caso de errores controlados retorna 500 especificando el problema.

### Situaciones asumidas de las instrucciones de la construcción de la api rest.

1- En el caso de la verificación de oblicuos, solo verificar oblicuos hacia la derecha tanto en la parte superior como inferior de la matriz.

2- Es mutante si existe más de 4 letras iguales inclusive en secuencia.
