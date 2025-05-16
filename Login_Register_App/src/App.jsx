import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import UserHome from './Components/UserHome';
function App() {
  return<div className='container'>
    <Routes>
      <Route path="/" element ={<Login/>}>
      </Route>
      <Route path="/register" element ={<Register/>}>
      </Route>
      <Route path="/userHome" element ={<UserHome/>}>
      </Route>
    </Routes>
    
  </div>
}
export default App;