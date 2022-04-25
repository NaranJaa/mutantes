import { Request, Response } from "express";
import {
  checkArrayContent,
  checkHorizontal,
  checkVertical,
  checkBelowOblique,
  checkTopOblique,
  checkArrayDimension,
} from "./mutantes.services";


export const isMutant = (req: Request, res: Response) => {
  const adnSequence = req.body.adnSequence;

  try {
    if (checkArrayContent(adnSequence) && checkArrayDimension(adnSequence)) { 
      const humano = checkHorizontal(adnSequence) 
        && checkVertical(adnSequence) 
        && checkTopOblique(adnSequence) 
        && checkBelowOblique(adnSequence);

      console.log('humano: ', humano);  
      if (humano) {
        res.status(403).json({
          message: `Forbidden`,
          statusCode: 403,
        });
        return;
      }

      res.json({
        message: "OK", // si es mutante retorna 200
        statusCode: 200,
      });

    } else {
      res.json({
        message:  "Error, la matriz solo puede contener A,T,C,G y debe ser de dim NxN.",
        statusCode: 500,
      });
    }

  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error interno del sistema",
    });    
  }

};
