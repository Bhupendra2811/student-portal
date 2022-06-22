import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import "./Adminscreen.css";
import Modal from "./../../node_modules/react-bootstrap/esm/Modal";
import { Button } from "react-bootstrap";
import Studentform from "./Studentform";
import Studentinfo from "./Studentinfo";

export default function Facultyscreen({ user }) {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [show, setShow] = useState(false);
  const [student, setstudent] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getStudent();
  }, []);

  function getStudent() {
    try {
      // {headers:{Authorization:`Bearer ${jwt.getIdToken().getJwtToken()}`}}
      API.get("sportal", "/students").then((res) => setstudent(res.Items));
    } catch (err) {
      console.log("error fetching students");
    }
  }
  function handleSubmit(event) {
    API.post("sportal", "/createuser", {
      body: { username, email, password, type: "Faculty" },
    }).then((res) => console.log(res));
    event.preventDefault();
  }

  function onStudentClick(student) {
    setSelectedStudent(student);
  }

  function onStudentBack() {
    setSelectedStudent(null);
  }
  return user ? (
    !selectedStudent ? (
      <div className="facultyform mt-6">
        <div className="mt-8 row justify-content-center  ">
          <div className="col-sm-10">
            <div
              className="card "
              style={{ borderRadius: "15px", borderColor: "grey" }}
            >
              <div></div>
              <h3
                className="card-header text-white"
                style={{ backgroundColor: "#000", borderRadius: "10px" }}
              >
                {" "}
                FACULTY
                <Button
                  className="position-absolute top-0 end-0 "
                  variant="primary"
                  onClick={handleShow}
                  style={{
                    marginTop: "7px",
                    marginRight: "10px",
                    width: "145px",
                    fontSize: "0.8rem",
                  }}
                >
                  CREATE FACULTY
                </Button>
              </h3>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>CREATE FACULTY</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="card">
                      <div className="card-body">
                        <form method="POST" onSubmit={handleSubmit}>
                          <input
                            type="text"
                            placeholder="username"
                            style={{ width: "27rem", height: "3rem" }}
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                          ></input>
                          <br />
                          <input
                            type="email"
                            placeholder="email"
                            style={{ width: "27rem", height: "3rem" }}
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                          ></input>
                          <br />
                          <input
                            type="password"
                            placeholder="password"
                            style={{ width: "27rem", height: "3rem" }}
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                          ></input>
                          <br />
                          <button
                            className="bg-primary"
                            style={{ marginLeft: "150px" }}
                            type="submit"
                            id="buttonDemo"
                          >
                            Create Faculty
                          </button>
                        </form>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
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
                      </tr>
                    </thead>
                    <tbody>
                      {/* {student.map(student =>{student.username} */}
                      <tr>
                        <td>{user["cognito:username"]}</td>
                        <td>computer science</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {user["cognito:groups"][0] === "Faculty" ? (
              <Studentform onStudentClick={onStudentClick} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    ) : (
      <Studentinfo onBack={onStudentBack} student={selectedStudent} />
    )
  ) : (
    <></>
  );
}
