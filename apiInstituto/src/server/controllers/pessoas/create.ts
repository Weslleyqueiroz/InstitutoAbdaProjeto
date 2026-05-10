import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

interface Ipessoas {
  nome: String;

}

export const create = (req: Request<{}, {}, Ipessoas>, res: Response ) =>{

  console.log(req.body.nome)

  if (req.body.nome === undefined) {
    return res.status(StatusCodes.BAD_REQUEST).send('Informe o atributo nome')
  }else if(req.body.nome.length<3){
     return res.status(StatusCodes.BAD_REQUEST).send('O nome deve ser maior que 3 caracteres')
  }

  return res.send('create!');

}
