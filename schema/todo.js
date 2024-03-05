import mongoose from "mongoose";

const { Schema } = mongoose;

const TodoModel = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });


const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoModel);

export default Todo;