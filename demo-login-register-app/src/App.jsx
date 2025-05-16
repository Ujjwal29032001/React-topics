import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register'
import UserHome from './component/UserHome';

function App() {
  return <div className='container'>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/userHome" element={<UserHome/>}></Route>
    </Routes>

  </div>
}
export default App
