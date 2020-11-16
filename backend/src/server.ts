import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors'

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handlrer'

const app = express ();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

app.listen(3333);

//rota = conjunto
// recurso = usuario

//medotos http = get, post, put, delete
//parametross

//Get = Buscar uma informação
//Post = criando uma informação

//put = editando uma informação
//delete = deleta uma informação

// query Params: hhtp://localhost:3333/users?searcj=diego
// route Params: hhtp://localhost:3333/users/1 (indentificar um recurso)
// body : hhtp://localhost:3333/users (identificar um recurso)