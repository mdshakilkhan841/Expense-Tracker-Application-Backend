import express from "express"; //valid only for node.js latest version 
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from "body-parser";

import DBConnection from "./database/DBConnection.js";
import router from "./routes/router.js";

const app = express();
dotenv.config();

app.use(cors()); // to resolve cors issue
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended:true })); //for encode URL

app.use(router)

const PORT = process.env.PORT || 8001;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

DBConnection(username, password);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});