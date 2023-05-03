import Student from '../models/Student.js'

export const createStudent = async (req, res) => {
    try {
        const {name, email, phoneNumber, age} = req.body;
        const student = new Student({name, email, phoneNumber, age})
        const savedStudent = await student.save()
        res.status(200).json(savedStudent)
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()
        res.json(students)
    } catch (error) {
        res.status(404).json({mesage: error.message})
    }
}

export const getStudentById = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findById(id)
        if (!student) throw new Error('Student not found');
        res.json(student)
    } catch (error) {
        res.status(400).json({message: error.mesage})
    }
}

export const updateStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, email, phoneNumber, age} = req.body
        const student = await Student.findByIdAndUpdate(id, {name, email, phoneNumber, age}, {new: true})
        console.log(student)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const deleteStudent = async (req, res) => {
    try {
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id)
        if(!student) throw new Error('User not defined')
        res.json(student)
        
    } catch (error) {
        res.status(400).json({message: error.mesage})
    }
}
