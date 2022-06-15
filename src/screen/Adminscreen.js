import React from "react";
import "./Adminscreen.css";
import Facultyscreen from "./Facultyscreen";
export default function Adminscreen() {
  return (
    <div className="adminscreen">
      <div className="overlay"></div>

      <div className="mt-8 row justify-content-center  ">
        <div className="col-sm-6">
          {/* <div class="alert alert-success" role="alert">
              <h4 class="alert-heading ">Well done!
                <p>Logged in successfully</p>
              </h4>
              <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div> */}
          <Facultyscreen />
        </div>
      </div>
    </div>
  );
}
