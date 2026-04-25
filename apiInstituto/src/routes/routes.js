const router = require('express').Router()
const {registrar} = require('../controllers/auth.controler')


router.post('registrar', registrar)


router.post('/criar', (req,res) =>{
    const nome = req.body.nome
    const sobrenome = req.body.sobrenome
    const email = req.body.email
    const senha = req.body.senha

    res.json({message : `O usuário ${nome} foi criado com sucesso!`})
})

module.exports = router