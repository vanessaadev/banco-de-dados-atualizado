//importando o express
const express = require('express');

//importando a conexao com o banco de dados que agora está isolada
const database = require('../../connection/database');

//criando o app para adicionar as novas rotas/endpoints
const app = express.Router();

const TABLE_NAME = 'tb_produto';
const BASE_URL = '/produtos';

//criando uma rota do tipo GET para buscar todas os produtos
app.get('/produtos', async (req, res) => {
    let lista = await database.execute('SELECT * FROM tb_produto');

    res.send(JSON.stringify(lista));
});

app.get('produtos/:id', async (req, res) => {
    let dados = await database.execute(`
        SELECT * FROM tb_produto WHERE id='${req.params.id}'
    `);

    res.send(dados[0]);
});

app.post('/produtos', async (req, res) => {
    let dados = req.body;

    let sql = await database.execute(`
        INSERT INTO tb_produto (nome, valor, tamanho, cor, quantidade) VALUES ('${req.body.nome}', '${req.body.valor}', '${req.body.tamanho}', '${req.body.cor}', '${req.body.quantidade}');
    `);
    
    dados.id = sql.insertId;

    res.status(201).send(dados);
})

app.delete('/produtos/:id', async (req, res) => {
    await database.execute(`
        DELETE FROM tb_produto WHERE id='${req.params.id}'
    `);

    res.sendStatus(204);
});

app.put('/produtos/:id', async (req, res) => {
    let dados = req.body; 

    await database.execute(`
        UPDATE tb_produto SET nome='${dados.nome}', valor='${dados.valor}', tamanho='${dados.tamanho}', cor='${dados.cor}', quantidade='${dados.quantidade}'
        WHERE id = '${req.params.id}'
    `);
    
    dados.id = parseInt(req.params.id);

    res.send(dados);
});



//exportando todas as rotas criadas nesse arquivo
module.exports = app;
