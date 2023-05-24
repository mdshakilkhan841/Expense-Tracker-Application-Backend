import express from "express"; //valid only for node.js latest version 
import dotenv from 'dotenv';
import Connection from "./database/Connection.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));