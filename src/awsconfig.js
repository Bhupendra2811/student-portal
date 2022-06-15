import { Auth } from 'aws-amplify';
const awsconfig = {
  "Auth": {
    "region": "ap-south-1",
    "userPoolId": "ap-south-1_7i8IBz79C",
    "userPoolWebClientId": "5vro50o5m8nurech19rbkeqbep",
    "mandatorySignIn": true,
    "cookieStorage": {
      // "domain": "studentportal-frontend.s3-website.ap-south-1.amazonaws.com",
      "domain": "localhost",
      "path": "/",
      "expires": 365,
      "secure": false,
    },
    "oauth": {
      "domain": "sportal.auth.ap-south-1.amazoncognito.com",
      "scope": [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin"
      ],
      "redirectSignIn": "http://localhost:3000/",
      "redirectSignOut": "http://localhost:3000/",
      "responseType": "token"
    }
  },
  "API": {
    "endpoints": [
      {
        "name": "sportal",
        "region": "ap-south-1",
        // "endpoint": "http://localhost:5000",
        "endpoint": "https://il389coxja.execute-api.ap-south-1.amazonaws.com/",
        custom_header: async () => {
          return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
}

export default awsconfig