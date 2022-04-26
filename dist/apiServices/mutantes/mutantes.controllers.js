"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMutant = void 0;
const mutantes_services_1 = require("./mutantes.services");
const isMutant = (req, res) => {
    const adnSequence = req.body.adnSequence;
    try {
        if ((0, mutantes_services_1.checkArrayContent)(adnSequence) && (0, mutantes_services_1.checkArrayDimension)(adnSequence)) {
            const humano = (0, mutantes_services_1.checkHorizontal)(adnSequence)
                && (0, mutantes_services_1.checkVertical)(adnSequence)
                && (0, mutantes_services_1.checkTopOblique)(adnSequence)
                && (0, mutantes_services_1.checkBelowOblique)(adnSequence);
            console.log('humano: ', humano);
            if (humano) {
                res.status(403).json({
                    message: `Forbidden`,
                    statusCode: 403,
                });
                return;
            }
            res.json({
                message: "OK",
                statusCode: 200,
            });
        }
        else {
            res.json({
                message: "Error, la matriz solo puede contener A,T,C,G y debe ser de dim NxN.",
                statusCode: 500,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            error: true,
            message: "Error interno del sistema",
        });
    }
};
exports.isMutant = isMutant;
