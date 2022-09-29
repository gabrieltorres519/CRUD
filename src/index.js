//Babel digiere código javascript facilitando escrtura, siilar a nodemon en algunos sentidos
// npm i @babel/core
// @babel/cli
// @babel/preset-env

// npm install express express-handlebars mongoose morgan 
// npm i @babel/core @babel/cli @babel/preset-env nodemon -D

//Gracias a Babel podemos utilizar esta sintaxis para usar las librerías debido a esto se usa  npx babel-node src/index.js
import {express} from "express";
import indexRoutes from '../src/routes/index';

const app = express();

app.use(indexRoutes);

app.listen(3000)
console.log('Sevidor en puerto',3000)