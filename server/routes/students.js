import express from 'express'
import {createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} from '../controllers/userController.js'

const router = express.Router()

router.post('/', createStudent);
router.get('/', getAllStudents);
router.get('/read/:id', getStudentById)
router.put('/update/:id', updateStudent)
router.delete('/delete/:id', deleteStudent)

export default router