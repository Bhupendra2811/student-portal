import { Auth } from 'aws-amplify';
const awsconfig = {
  "Auth": {
    "region": "ap-south-1",
    "userPoolId": "ap-south-1_TrkYuUMTo",
    "userPoolWebClientId": "t75267u7k8tpg4d7pvi3aigcj",
    "mandatorySignIn": true,
    "cookieStorage": {
      // "domain": "studentportal-frontend.s3-website.ap-south-1.amazonaws.com",
      "domain": "localhost",
      "path": "/",
      "expires": 365,
      "secure": true,
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
        "endpoint":"https://bkqajxcj0i.execute-api.ap-south-1.amazonaws.com/",
        // "endpoint":"https://nl91ptvnpf.execute-api.ap-south-1.amazonaws.com/",
        custom_header: async () => {
          return { Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}` }
        }
      }
    ]
  }
}

export default awsconfig