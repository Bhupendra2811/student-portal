import React from 'react';
import StudentDetail from './StudentDetail';
import "./Studentinfo.css"
import StudentUpdate from './StudentUpdate'
export default function Studentinfo({ onBack, student , }) {
    console.log(student)
    return (
    <div classNameName="studentinfo mt-6">
      {
        onBack ?
          <button className='position-absolute top-20 start-0' onClick={() => onBack()} style={{ backgroundColor: "#fff",marginLeft:"20px"}}>Back</button>
          :
          <></>
      }
      <div className="container" style={{borderRadius:"15px",borderColor:"grey"}}>
        <div className="main-body">
          <div className="row gutters-sm p-2">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>{(student?.username)||  student['cognito:username']}</h4>
                      <button className="btn btn-primary">Email</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                  <StudentUpdate student={student}/>
                    <div className="col-sm-3">
                      <h6 className="mb-0">Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    {(student?.username) || student['cognito:username']}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {student.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Department</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {student.department}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Class</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     {student.classNo}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row gutters-sm">
            <div className=" mb-3 ">
          
              <div className="card h-100 ">
                <StudentDetail  student={student}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}
