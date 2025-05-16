import {BrowserRouter, Link,Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
    return<>
    {
        <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;&nbsp;
        <Link to="/login">Login</Link>&nbsp;&nbsp; 
        <Link to="/register">Register</Link>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about"element={<About/>}></Route>
            <Route path="/contact"element={<Contact/>}></Route>
            <Route path="/login"element={<Login/>}></Route>
            <Route path="/register"element={<Register/>}></Route>
        </Routes>
       
        </BrowserRouter>
    }
    </>
}
export default App;