import  express from "express";
import { addExpense } from "../controller/addExpenseController.js";

const router = express.Router();

router.post('/', addExpense)

export default router;