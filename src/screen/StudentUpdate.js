import React ,{useEffect, useState} from 'react'
import Modal from './../../node_modules/react-bootstrap/esm/Modal';
import { Button } from 'react-bootstrap';
import { API } from 'aws-amplify';

export default  function StudentUpdate({student}){
    const [show, setShow] = useState(false);
    // const [email, setemail] = useState(student.email);
    const [department, setdepartment] = useState(student.department);
    const [classNo, setclassNo] = useState(student.classNo);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
  

  function handleSubmit(event) {
    API.post("sportal", `/students/${student.studentId}`, { body: {studentId:student.studentId, department: department, classNo:classNo} })
      .then(res => console.log(res));
    event.preventDefault();
  }
    return (
        <div className="updateStud">
         <> 
          <Button 
              className="position-absolute top-0 end-0" variant="primary" onClick={handleShow} style={{marginRight:"5px",marginTop:"5px"}} >
              <i class="bi bi-pencil-square"></i>
              </Button>
               
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>UPDATE STUDENT</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="card" >
                      <div className="card-body ">
                        <form method='POST' onSubmit={handleSubmit}>
                         
                          {/* <input type='email' placeholder='email' style={{ width: "27rem", height: "3rem" }}  value={email} onChange={(e) => setemail(e.target.value)}></input>
                          <br /> */}
                          <input type='text' placeholder='department' style={{ width: "27rem", height: "3rem" }}  value={department} onChange={(e) => setdepartment(e.target.value)}></input>
                          <br />
                          <input type='text' placeholder='classNo' style={{ width: "27rem", height: "3rem" }}  value={classNo} onChange={(e) => setclassNo(e.target.value)}></input>
                          <br />
                          <button className="bg-primary" style={{ marginLeft: "150px" }} type="submit" id="buttonDemo">update Student</button>
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
      </div>
    );
}