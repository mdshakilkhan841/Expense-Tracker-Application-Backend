import mongoose from "mongoose";

const DBConnection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.kc3cwwt.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL, { 
            dbName:"TechDojo",
            useUnifiedTopology: true,
            useNewUrlParser: true 
        });
        console.log('Connected to MongoDB ....')
     }catch(error) {
        console.log('Error while connecting with the MongoDB:', error.message);
    }
}

export default DBConnection;