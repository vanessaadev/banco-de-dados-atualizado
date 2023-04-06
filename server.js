const express = require('express');
const categoryRoutes = require("./resources/category/routes");
const bannerRoutes = require('./resources/banner/routes');
const usersRoutes = require('./resources/user/routes');
const produtoRoutes = require('./resources/produto/routes');
const cors = require('cors');
const swagger = require('swagger-ui-express');
const docs = require('./docs.json');

const app = express();

app.use(cors());

//criando rota de documentação
app.use('/documentacao', swagger.serve, swagger.setup(docs));

app.use(express.json()); //a comunicação toda vai ser feita em json, ta ligado!?
app.use(categoryRoutes);
app.use(bannerRoutes);
app.use(usersRoutes);
app.use(produtoRoutes);

app.listen(8000, () => {
    console.log('--------------');
    console.log('--- PRONTO ---')
    console.log('--------------');
});
