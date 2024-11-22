const express = require('express');
const app = express()
const port = 3000;

app.use(express.json());

let usuario = [];


app.get('/usuario', (req, res) => {
    res.json (usuario);

});

app.post('/usuario', (req, res) =>{
    const { nome, email } = req.body
    if (!nome || !email) {
        return res.status(400).json({error: 'Nome e email são obrigatorios '});
    }
    const novoUsuario = { id:usuario.length + 1, nome, email };
    usuario.push(novoUsuario);
    res.status(201).json(novoUsuario);

});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});