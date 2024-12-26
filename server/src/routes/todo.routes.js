import { Router } from "express";
import { createTask, deleteTask, getTask, updateTask } from "../controllers/todo.controllers.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = Router()

router.route('/add-todo').post(verifyJwt,createTask)
router.route('/get-todo').get(verifyJwt,getTask)
router.route('/delete-todo/:id').delete(verifyJwt,deleteTask)
router.route('/update-todo/:id').patch(verifyJwt,updateTask)

export default router