// import Router  from "express";
import {Router} from "express";
import Task from "../models/Task";

const router = Router();

router.get('/', async (req,res)=>{
    const tasks = await Task.find();
    res.render('index',{tasks:tasks})
});

router.post('/task/add',async (req,res)=>{
    const task =Task(req.body)
    const taskSaved = await task.save();
    console.log(taskSaved);
    //console.log(req.body);
    //res.send("Guardar");
    res.redirect('/')
});

router.get('/main',(req,res)=>{
    res.render('main')
});

router.get('/about',(req,res)=>{
    res.render('about')
});

router.get('/delete',(req,res)=>{
    res.render('delete')
});

router.get('/edit',(req,res)=>{
    res.render('edit')
});

export default router;