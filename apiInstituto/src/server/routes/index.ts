import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import {pessoasController} from './../controllers'



const router = Router();



router.get('/', (req, res) => {
  return res.send('Olá, DEV!');
});


router.post('/cadastrar' , (req,res) =>{
  return res.status(200).json({mensagem: "Cadastro realizado!"})
} )



export { router };
