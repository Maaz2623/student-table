import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = () => {

  

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/students')
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://127.0.0.1:5000/students/delete/'+id)
    .then((res) => {
      location.reload()
    })
    .catch(err => console.log(err))
  }



  return (
    <>
      <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
          <h2>Student List</h2>
          <div className='d-flex justify-content-left my-1'>
            <Link to="/create" className="btn btn-success">Create +</Link>
          </div>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((student, index) => {
                return (
                  <tr key={index}>
                    <td>{student._id}</td>
                    <td>{student.name}</td>
                    <td>
                      <Link to={`/read/${student._id}`} className='btn btn-sm btn-info'>Read</Link>
                      <Link to={`/edit/${student._id}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                      <Link onClick={() => handleDelete(student._id)} className='btn btn-sm btn-danger'>Delete</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home