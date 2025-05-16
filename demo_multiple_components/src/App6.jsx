//props = read-only properties that are shared between components.
  //      A parent component send data to a child component.
    //    <Component key=value/
//default props = default value for props in case they are not 
  //              passed from parent component    
  
import Student from './Student.jsx' 
function App() {
    return<div>
        <Student name="Ujjwal" age="30" isStudent={false}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={60} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={false}/>
        <Student name="Larry"/>
        </div>
}   
export default App; 