import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

    const navigate = useNavigate()

  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/students/read/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          values,
          name: res.data.name,
          email: res.data.email,
          phoneNumber: res.data.phoneNumber,
          age: res.data.age,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault()
    axios.put('http://127.0.0.1:5000/students/update/'+id, values)
    .then(res => console.log(res))
    .catch()
    navigate('/')
  }


  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h2>Add Student</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="form-control"
              value={values.phoneNumber}
              onChange={(e) =>
                setValues({ ...values, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              className="form-control"
              value={values.age}
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
