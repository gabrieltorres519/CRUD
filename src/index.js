//Babel digiere código javascript facilitando escrtura, siilar a nodemon en algunos sentidos
// npm i @babel/core
// @babel/cli
// @babel/preset-env
// @babel/node

// npm install express express-handlebars mongoose morgan 
import app from './app'
import './database';
// import express from "express";
// // import exphbs from 'express-handlebars'
// import indexRoutes from './routes/index';
// import path  from "path";
// import { create } from "express-handlebars"
// import Router from "express";

// const router = Router();

// const app = express();
// app.set('views',path.join(__dirname,'views'));
// app.engine("hbs", create({
//     layoutsDir: path.join(app.get('views','layouts')),
//     extname: ".hbs",
//     defaultLayout: "main"
// }).engine
// )

// app.set("view engine",".hbs")

// router.get('/',(req,res)=>{
//     res.send('Hola mundo')
// });

// router.get('/main',(req,res)=>{
//     res.send('hola')
// });

// app.use(router);

app.listen(3000)
console.log('Sevidor en puerto',3000)