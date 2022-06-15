import React ,{useState} from 'react'
import Modal from './../../node_modules/react-bootstrap/esm/Modal';
import { Button } from 'react-bootstrap';
import { API } from 'aws-amplify';


export default  function StudentDetail({student}){
    const [show, setShow] = useState(false);
    const [title, settitle] = useState();
  const [value, setvalue] = useState(); 


    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(event) {
    API.post("sportal", `/studentdetails/${student.studentId}`, { body: {studentId:student.studentId, title: title, value:value} })
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
                          <input type='text' placeholder='Title' style={{ width: "27rem", height: "3rem" }}  value={title} onChange={(e) => settitle(e.target.value)}></input>
                          <br />
                          <input type='text' placeholder='Value' style={{ width: "27rem", height: "5rem" }}  value={value} onChange={(e)=>setvalue(e.target.value)}></input>
                          <br />
                          <button className="bg-primary" style={{ marginLeft: "150px" }} type="submit" id="buttonDemo">Add Details</button>
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
              <div className="card-body ">
                  <h6 className="d-flex align-items-center mb-3 "><i className="material-icons text-info mr-2">Weekly </i> Report Status</h6>
                  <h2>{student.title}</h2>
                  <h1>{student.value}</h1>
                </div>
      </div>
    );
}