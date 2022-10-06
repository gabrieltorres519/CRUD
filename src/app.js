// npm i @babel/core @babel/cli @babel/preset-env nodemon -D

//Gracias a Babel podemos utilizar esta sintaxis para usar las librerías debido a esto se usa  npx babel-node src/index.js
import express from "express";
import exphbs from 'express-handlebars'
import indexRoutes from './routes/index.js';
import path  from "path";
import { create } from "express-handlebars";
import morgan from "morgan";

const app = express();
app.set('views',path.join(__dirname,'views'));
app.engine(".hbs", create({
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),"partials"),
    defaultLayout: "main",
    extname: ".hbs"
}).engine
)

app.set("view engine",".hbs")

//middlewares
app.use(morgan('dev')) //Muestra información en la vista sobre peticiones (cuando se haga un post con datos veremos qué se encía)
app.use(express.urlencoded({extended: false}))
//Routes
app.use(indexRoutes)


export default app