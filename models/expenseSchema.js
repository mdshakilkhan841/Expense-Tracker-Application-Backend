import mongoose from "mongoose";
import autoIncrement from "mongoose-plugin-autoinc";

const expenseSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    amount: { type: String, required: true },
    category: { type: String, required: true },
    dateTime: { type: String, required: true },
    notes: { type: String }
});

// auto-increment plugin for track individual expense id
expenseSchema.plugin(autoIncrement.plugin, {
    model: "expense-record",
    field: "expenseId",
    startAt: 1,
    incrementBy: 1
});

// Export the expenseItem Model
const expenseRecord = mongoose.model("expense-record", expenseSchema);

export default expenseRecord;
