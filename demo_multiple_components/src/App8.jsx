import React from "react";
class App1 extends React.Component
{
    constructor() {
       super(); //Represent Parent class Constructor
       console.log("Constructor Invoked : ");    
    }
    render(){
        console.log("Render Invoked : ");
        return<>
         <h1 style={{color:'red',textAlign:'center'}}>App-1 Component Called :</h1>    
        </>
    }
}
export default App1