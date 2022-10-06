import { connect } from "mongoose";

(async()=>{
    try {
        const db = await connect("mongodb://localhost/crud")
        console.log("BASE DE DATOS CONECTADA A", db.connection.name)
    } catch (error) {
        console.log(error);
    }    
})()
