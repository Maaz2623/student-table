import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [student, setStudent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/students/read/" + id)
      .then((res) => {
        console.log(res);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <div className="p-2">
          <h1 className="mb-3">Student Detail</h1>
          <h3>ID : {student._id}</h3>
          <h3>Name : {student.name}</h3>
          <h3>Email : {student.email}</h3>
          <h3>Phone Number : {student.phoneNumber}</h3>
          <h3>Age : {student.age}</h3>
        </div>

        <Link to="/" className="btn btn-primary me-2">
          Back
        </Link>
        <Link to={`/edit/${student._id}`} className="btn btn-info">Edit</Link>
      </div>
    </div>
  );
};

export default Read;
