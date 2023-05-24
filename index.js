import express from "express"; //valid only for node.js latest version 
import dotenv from 'dotenv';
import cors from 'cors';
import Connection from "./database/Connection.js";
import route from "./routes/route.js";

const app = express();
dotenv.config()

app.use(cors()); // to resolve cors issue
app.use('/', route)

const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));