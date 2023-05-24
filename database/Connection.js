import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@techdojo.j1j4ush.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected ....')
     }catch(error){
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;