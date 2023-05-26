import expenseRecord from "../models/expenseSchema.js"

//send expense form data 
export const addExpense = async (request, response) => {
    const expense = request.body;
    
    const { itemName, amount, category, dateTime } = expense;
    if( !itemName || !amount || !category || !dateTime ){
        response.status(404).send("Please fill the data !");
    }

    console.log(expense);
    
    const newExpense = new expenseRecord(expense);
    try{
        await newExpense.save();
        response.status(201).json(newExpense);
    }catch (error){
        response.status(409).json({message: error.message});
    }

}