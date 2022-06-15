import './App.css';
import Landing from './screen/Landing';
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './awsconfig.js'
import awsauth from './awsauth.json'
import { useEffect, useState } from 'react';




function App() {
  const [user, setuser] = useState(null)

  useEffect(() => {
      Amplify.configure(awsconfig)
      Auth.configure({ oauth: awsauth })

      Auth.currentAuthenticatedUser().then(user => {
        console.log(user)
        setuser(user)
      }).catch(() => console.log('Not signed in'))
    }, []);
  return (
    <div className="App">
     <Landing /> 
    </div>
  );
}
export default App;
