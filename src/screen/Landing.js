/* eslint-disable react/jsx-no-comment-textnodes */
import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import Adminscreen from "./Adminscreen";
import Facultyscreen from "./Facultyscreen";
import Studentinfo from "./Studentinfo";
import Studentform from "./Studentform";
import LoginPage9 from "../LoginPage9";

function Landing() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          setUser(data.signInUserSession.idToken.payload);
          break;
        case "signOut":
          setUser(null);
          break;
        default:
          break;
      }
    });
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setUser(res.signInUserSession.idToken.payload);
      })
      .catch((error) => console.log(error));
  }, []);

  return user ? (
    <div className="logout">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-info"
        style={{
          backgroundColor:
            "     rgba(var(--bs-primary-rgb), var(--bs-bg-opacity))",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href=".">
            Portal
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href=".">
                  {user["cognito:username"]}
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href=".">
                  {user["cognito:groups"]}
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="."
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href=".">Action</a>
                  <a className="dropdown-item" href=".">Another action</a>
                  <a className="dropdown-item" href=".">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href=".">Separated link</a> */}
              {/* </div> */}
              {/* </li> */}
              <li className="position-absolute end-0 ">
                <a href=".">
                  <button
                    className="logout-btn mt-2"
                    onClick={() => Auth.signOut()}
                    style={{
                      borderRadius: "50px",
                      backgroundColor:
                        "rgba(var(--bs-rgb), var(--bs-bg-opacity))",
                      color: "white",
                      marginRight: "20px",
                      borderColor: "white",
                    }}
                  >
                    Logout
                  </button>
                </a>
              </li>
            </ul>
          </div>
          </div>
      </nav>
      {user["cognito:groups"][0] === "super-admin" ? (
        <Adminscreen></Adminscreen>
      ) : user["cognito:groups"][0] === "Faculty" ? (
        <Facultyscreen user={user}>
          <Studentform />
        </Facultyscreen>
      ) : (
        <Studentinfo student={user} />
      )}
    </div>
  ) : (
    <div className="login">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-info"
        style={{ backgroundColor: "#0dcaf0", height: "3rem" }}>
        </nav>
      <LoginPage9 />
    </div>
  );
}
export default Landing;
