// npm i @babel/core @babel/cli @babel/preset-env nodemon -D

//Gracias a Babel podemos utilizar esta sintaxis para usar las librerías debido a esto se usa  npx babel-node src/index.js
import {express} from "express";
import indexRoutes from '../src/routes/index';

const app = express();


app.use(indexRoutes);


export default app