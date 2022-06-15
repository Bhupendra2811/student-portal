import React from "react";
import "./index.css";

import { Authenticator,defaultDarkModeOverride,
  ThemeProvider,} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


export default function LoginPage9() {
  //   const [username, setusername] = useState();
  //   const [password, setpassword] = useState();

  //     function handleSubmit(event){
  //     event.preventDefault();
  //    let response =   Auth.signIn(username,password).then(user => {
  //     if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {

  //         Auth.completeNewPassword(
  //             user,               // the Cognito User Object
  //             password,       // the new password
  //         ).then(user => {
  //             // at this time the user is logged in if no MFA required
  //             console.log(user);
  //         }).catch(e => {
  //           console.log(e);
  //         })
  //    console.log(response);
  //   }});
  // };
  return (
    <div>
      <div className="login-page-9">
        <div className="row h-100 align-items-center">
          <div className="col-md-8 ">
            <div className="text-part  d-flex flex-column ">
              <h1>LOGIN</h1>
              {/* <form  onSubmit={handleSubmit}>
              <input type="text" placeholder="Username"  value={username} onChange={(e) => setusername(e.target.value)} />
              <input type="text" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
              <button  type="submit" >LOGIN</button>
              </form> */}
              <ThemeProvider
                 theme={{
                   overrides:[defaultDarkModeOverride]
                 }}
                 colorMode="dark">
              <Authenticator hideSignUp={true}></Authenticator>
              </ThemeProvider>
              
            </div>
          </div>
          {/* <div className="col-md-8 d-flex justify-content-center">
              <img src={jogging} className="w-50"/>
          </div> */}
        </div>
        
        <div className="curve">
          <svg
            width="600"
            height="1100"
            viewBox="0 0 769 901"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M874.5 54.0001C792.5 289.5 1154.5 1068.5 547.958 977C356.292 977 0.0419922 1152.5 0.0419922 936C314.5 636.5 0.0419922 243 417 415C850 614 654.5 -706.5 874.5 54.0001Z"
              fill="#0DCAF0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
