//Babel digiere código javascript facilitando escrtura, siilar a nodemon en algunos sentidos
// npm i @babel/core
// @babel/cli
// @babel/preset-env
// @babel/node

// npm install express express-handlebars mongoose morgan 
// import app from './app'
import express from "express";
import indexRoutes from '../src/routes/index';

const app = express();


app.use(indexRoutes);
app.listen(3000)
console.log('Sevidor en puerto',3000)