import  express from "express";
import { addExpense, getExpense, getExpensesList, getExpenses, getDateExpenses, getDateToDateExpenses, editExpense, deleteExpense } from "../controller/addExpenseController.js";

const router = express.Router();

router.post('/', addExpense)

router.get('/expense-list/:expenseId', getExpense)
router.get('/expense-list', getExpensesList)
router.put('/expense-list/:expenseId', editExpense)
router.delete('/expense-list/:expenseId', deleteExpense)
// router.get('/expense-report/:expenseId', getExpense)
// router.put('/expense-report/:expenseId', editExpense)


router.get('/expense-report/:dateRange', getDateToDateExpenses)


router.get('/expense-report', getDateExpenses)
router.get('/category-report', getExpenses)
router.get('/forecasted-expenses', getDateExpenses)

// router.delete('/expense-report/:expenseId', deleteExpense)


export default router;