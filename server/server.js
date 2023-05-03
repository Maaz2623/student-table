import mongoose, { mongo } from "mongoose";
import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors'
import usersRouter from './routes/students.js'

const app = express()

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

// Connect To MongoDB 
const connectToDatabase = async () => {
    const url = 'mongodb://127.0.0.1:27017/crud'
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected To MongoDB')
    } catch (err) {
        console.error('Error Connecting To MongoDB', err)
    }
}

// Call Functions 
connectToDatabase()

// Routes 

app.use('/students', usersRouter)

// Listen 
const port = 5000
app.listen(port, () => console.log(`Listening on port: ${port}` ))

