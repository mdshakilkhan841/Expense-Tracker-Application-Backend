import expenseRecord from "../models/expenseSchema.js"

//send expense form data 
export const addExpense = async (request, response) => {
    const expense = request.body;

    const { itemName, amount, category, dateTime } = expense;
    if (!itemName || !amount || !category || !dateTime) {
        response.status(404).send("Please fill the data !");
    }

    console.log(expense);

    const newExpense = new expenseRecord(expense);
    try {
        await newExpense.save();
        response.status(201).json(newExpense);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

};

// get expense data from DB
export const getExpenses = async (request, response) => {
    try {
        const expenseData = await expenseRecord.find({});
        response.status(200).json(expenseData);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

// get expense data from DB
export const getExpensesList = async (request, response) => {
    try {
        const expenseData = await expenseRecord.aggregate([
            { $sort: { expenseId: -1 } },
            {
                $project: {
                    _id: 0,
                    expenseId: 1,
                    itemName: 1,
                    amount: 1,
                    category: 1,
                    dateTime: 1,
                    date: {
                        $dateToString: {
                            format: "%d/%m/%Y",
                            date: { $toDate: "$dateTime" }  // Convert "dateTime" field to date
                        }
                    }
                }
            }
        ]);
        response.status(200).json(expenseData);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

// get date wise expense data from DB
export const getDateExpenses = async (request, response) => {
    try {
        const expenseData = await expenseRecord.aggregate([
            { $sort: { dateTime: -1 } },
            {
                $project: {
                    _id: 0,
                    expenseId: 1,
                    itemName: 1,
                    amount: 1,
                    category: 1,
                    dateTime: 1,
                    date: {
                        $dateToString: {
                            format: "%d/%m/%Y",
                            date: { $toDate: "$dateTime" }  // Convert "dateTime" field to date
                        }
                    }
                }
            }
        ]);
        response.status(200).json(expenseData);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};

// get single expense data from DB
export const getExpense = async (request, response) => {
    // console.log(request.params)
    try {
        const expenseData = await expenseRecord.find({expenseId: request.params.expenseId});
        response.status(200).json(expenseData);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
};


//update edit expense form data 
export const editExpense = async (request, response) => {
    const expense = request.body;

    const { itemName, amount, category, dateTime } = expense;
    if (!itemName || !amount || !category || !dateTime) {
        response.status(404).send("Please fill the data !");
    }

    console.log(expense);

    const editExpense = new expenseRecord(expense);

    try {
        await expenseRecord.updateOne({expenseId: request.params.expenseId}, editExpense);
        response.status(201).json(editExpense);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }

};


// Delete single expense data from DB
export const deleteExpense = async (request, response) => {
    try {
        await expenseRecord.deleteOne({expenseId: request.params.expenseId});
        response.status(200).json({ message: 'Expense Deleted Successfully'});
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
};






