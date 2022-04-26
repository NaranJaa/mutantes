"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArrayContent = exports.checkArrayDimension = exports.checkHorizontal = exports.checkVertical = exports.checkTopOblique = exports.checkBelowOblique = void 0;
/**
 * Verifica en la parte oblicua inferior si hay secuencia de letras mayor o igual a 4
*/
function checkBelowOblique(dataArray) {
    try {
        let isMutante = false;
        let contador = 0;
        for (let j = 0; j < dataArray.length; j++) {
            let letratemp = dataArray[0].split("")[0];
            for (let i = 0; i < dataArray.length - j; i++) {
                let filaCero = dataArray[i + j].split("");
                let filaUno = i + j + 1 < (dataArray.length) ? dataArray[i + j + 1].split("") : [];
                if (filaUno && filaCero[i] === filaUno[i + 1] && letratemp === filaUno[i + 1]) {
                    contador++;
                    if (contador >= 3) {
                        isMutante = true;
                        console.log('-----  ES MUTANTE -------');
                        break;
                    }
                }
                else if (i + j + 1 < (dataArray.length) && letratemp != filaUno[i + 1]) {
                    contador = 0;
                }
                letratemp = (filaUno && filaUno[i + 1]) || '';
            }
            if (isMutante)
                break;
        }
        return !isMutante;
    }
    catch (error) {
        throw new Error('error ' + error);
    }
}
exports.checkBelowOblique = checkBelowOblique;
/**
 * Verifica en la parte oblicua superior si hay secuencia de letras mayor o igual a 4
*/
function checkTopOblique(dataArray) {
    try {
        let isMutante = false;
        for (let j = 0; j < dataArray.length; j++) {
            let icolumna = 0;
            let contador = 0;
            let letratemp = dataArray[0].split("")[j];
            for (let i = j; i < dataArray.length; i++) {
                let filaCero = dataArray[icolumna].split("");
                let filaUno = icolumna < (dataArray.length - 1) ? dataArray[icolumna + 1].split("") : [];
                if (filaUno && filaCero[i] === filaUno[i + 1] && letratemp === filaUno[i + 1]) {
                    contador++;
                    if (contador >= 3) {
                        isMutante = true;
                        console.log('-----  ES MUTANTE -------');
                        break;
                    }
                }
                else if (i + 1 < dataArray.length && letratemp != filaUno[i + 1]) {
                    contador = 0;
                }
                letratemp = (filaUno && filaUno[i + 1]) || '';
                icolumna++;
            }
            if (isMutante)
                break;
        }
        return !isMutante;
    }
    catch (error) {
        throw new Error('error ' + error);
    }
}
exports.checkTopOblique = checkTopOblique;
/**
 * Verifica en las columnas si hay secuencias de letras mayor o igual a 4
 */
function checkVertical(dataArray) {
    let isMutante = false;
    for (let j = 0; j < dataArray.length; j++) {
        let letratemp = dataArray[j].split("")[0];
        let contador = 0;
        for (let i = 0; i < dataArray.length; i++) {
            let stringCero = dataArray[i].split("");
            let stringUno = i < (dataArray.length - 1) ? dataArray[i + 1].split("") : null;
            if (stringUno && stringCero[j] === stringUno[j] && letratemp === stringUno[j]) {
                contador++;
                if (contador >= 3) {
                    isMutante = true;
                    console.log('-----  ES MUTANTE -------');
                    break;
                }
                else if (i < dataArray.length && letratemp != stringUno[j]) {
                    contador = 0;
                }
            }
            letratemp = (stringUno && stringUno[j]) || '';
        }
        if (isMutante)
            break;
    }
    return !isMutante;
}
exports.checkVertical = checkVertical;
/**
 * verifica si en filas hay secuencias de letras mayor o igual a 4
 */
function checkHorizontal(dataArray) {
    let isMutant = false;
    let regex = /(C{4,}?)|(T{4,}?)|(A{4,}?)|(G{4,}?)/;
    for (let elem of dataArray) {
        if (regex.test(elem)) {
            isMutant = true;
            break;
        }
    }
    return !isMutant;
}
exports.checkHorizontal = checkHorizontal;
/**
 * Verifica si la matriz de entrada es NxN
 */
function checkArrayDimension(dataArray) {
    let isInvalid = false;
    // Verificacion largo de columnas de la secuencia de adn
    let dimensionArray = dataArray.length;
    // Verificacion filas de la secuencia de adn
    for (let elem of dataArray) {
        if (dimensionArray !== elem.length) {
            isInvalid = true;
            break;
        }
    }
    return !isInvalid;
}
exports.checkArrayDimension = checkArrayDimension;
/**
 * Verifica que el contenido de la matriz es correcto
 * letras permitidos (A,T,C,G)
 */
function checkArrayContent(dataArray) {
    let isInvalid = true;
    let regex = /[^ATCG]+/;
    for (let elem of dataArray) {
        isInvalid = regex.test(elem); //si es true es porque tiene una letra diferente al conjunto permitido
        if (isInvalid) {
            break;
        }
    }
    return !isInvalid;
}
exports.checkArrayContent = checkArrayContent;
