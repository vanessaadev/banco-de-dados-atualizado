const autogen = require('swagger-autogen');

const arquivoSaida = './docs.json';
const endpoints = ['./server.js'];

autogen(arquivoSaida, endpoints);

//para executar 
//node gerar-docs.json