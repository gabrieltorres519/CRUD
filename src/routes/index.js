// import Router  from "express";
import {Router} from "express";
import Task from "../models/Task";

const router = Router();

router.get('/', async (req,res)=>{

    const tasks = await Task.find().lean();
    res.render('index',{tasks:tasks})
});

router.post('/task/add',async (req,res)=>{
    try{
        const task =Task(req.body)
        const taskSaved = await task.save();
        console.log(taskSaved);
        //console.log(req.body);
        //res.send("Guardar");
        res.redirect('/')
    }catch(error){
        console.log(error)
    }
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

router.get("/edit/:id",async(req,res)=>{
    //console.log(req.params.id)
  const task = await Task.findById(req.params.id).lean()

   // res.render("edit");
    res.render("edit",{task});
});

router.post("/edit/:id",async(req,res)=>{
    const {id} = req.params
    await Task.findOneAndUpdate(id,req.body)
    // console.log(req.body);
    // res.send('Cambio recibido');
    res.redirect('/')
});

export default router;