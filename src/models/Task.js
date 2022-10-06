import { Schema, model } from "mongoose";

const taskSchema = new Schema({ 
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description:  {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: String,
        default: false
    }},
    {
        timestamps: true,
        versionkey: false
    }
);


export default model("Task", taskSchema);
