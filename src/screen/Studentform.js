import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import './Adminscreen.css'
import Modal from 'react-bootstrap/esm/Modal';
import { Button } from 'react-bootstrap';

export default function Studentform({ onStudentClick }) {
  const [user, setUser] = useState(null);
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [department, setdepartment] = useState();
  const [classNo, setclassNo] = useState();
  const [show, setShow] = useState(false);
  const [student, setstudent] = useState([]);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    Auth.currentAuthenticatedUser().then(res => setUser(res));
  }, [])

  useEffect(() => {
    getStudent()
  }, [])


  function handleSubmit(event) {
    API.post("sportal", "/createuser", { body: { username, email, password, type: "Student", department, classNo } })
      .then(res => console.log(res));
    event.preventDefault();
  }

  function getStudent() {
    try {
      API.get("sportal", "/students",)
        .then(res =>console.log(setstudent(res.Items)));
        
    } catch (err) { console.log('error fetching students') }
  }

  return (
    user ?
      <div className="studentform mt-6">
        <div className="mt-8 row justify-content-center  ">
          <div className="col-sm-12" >
            <div className="card" style={{ borderRadius: "15px", borderColor: "grey" }}>

              <h3 className="card-header text-white" style={{ backgroundColor: "#000", borderRadius: "10px" }}> STUDENT <Button 
              className="position-absolute top-0 end-0" variant="primary" onClick={handleShow} 
              style={{ marginTop: "7px", marginRight: "10px", width: "145px", fontSize: "0.8rem" }}>
                CREATE STUDENT
              </Button>
               </h3>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>CREATE STUDENT</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="card" >
                      <div className="card-body ">
                        <form method='POST' onSubmit={handleSubmit}>
                          <input type='text' placeholder='username' style={{ width: "27rem", height: "3rem" }}  value={username} onChange={(e) => setusername(e.target.value)}></input>
                          <br />
                          <input type='email' placeholder='email' style={{ width: "27rem", height: "3rem" }}  value={email} onChange={(e) => setemail(e.target.value)}></input>
                          <br />
                          <input type='text' placeholder='department' style={{ width: "27rem", height: "3rem" }}  value={department} onChange={(e) => setdepartment(e.target.value)}></input>
                          <br />
                          <input type='text' placeholder='classNo' style={{ width: "27rem", height: "3rem" }}  value={classNo} onChange={(e) => setclassNo(e.target.value)}></input>
                          <br />
                          <input type='password' placeholder='password' style={{ width: "27rem", height: "3rem" }} value={password} onChange={(e) => setpassword(e.target.value)}></input>
                          <br />
                          <button className="bg-primary" style={{ marginLeft: "150px" }} type="submit" id="buttonDemo">Create Student</button>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleClose} >
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
              <div className="card-body">
                <div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Class</th>
                        <th scope="col">Report</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.map(student => {
                        return (<tr onClick={() => onStudentClick(student)}><td >{student.username}</td>
                          <td>{student.department}</td>
                          <td>{student.classNo}</td>
                          <td>Column content</td></tr>)
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      : <></>
  );
}
