import mongoose from "mongoose";


const expenseItemSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String,
})

