import express from 'express';
import cors from 'cors';
import logger from 'morgan';
const router  = require ('./routes/routes')

export const  app = express()


app.use(express.json())
app.use(router)
app.use(cors())
app.use(logger('dev'))



app.get('/', (req, res) => {
    res.send('A API está funcionando perfeitamente!');
});


app.get('/Usuarios', (req, res)=> {
    res.send('Usuário cadastrado')
})