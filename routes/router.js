import  express from "express";
import { addExpense, getUser } from "../controller/addExpenseController.js";

const router = express.Router();

router.post('/', addExpense)
router.get('/expense-list', getUser)

export default router;