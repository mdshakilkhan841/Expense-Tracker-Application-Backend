import  express from "express";
import { addExpense, getExpenses, getDateExpenses } from "../controller/addExpenseController.js";

const router = express.Router();

router.post('/', addExpense)
router.get('/expense-list', getExpenses)
router.get('/expense-report', getDateExpenses)
router.get('/category-report', getExpenses)
router.get('/forecasted-expenses', getDateExpenses)


export default router;