import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Create = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        age: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://127.0.0.1:5000/students', values)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter Email' className='form-control' onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Phone Number</label>
                    <input type="number" placeholder='Enter Phone Number' className='form-control' onChange={e => setValues({...values, phoneNumber: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="number" placeholder='Enter Age' className='form-control' onChange={e => setValues({...values, age: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create