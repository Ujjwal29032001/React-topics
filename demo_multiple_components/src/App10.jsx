import React from 'react'
class App3 extends React.Component{
    constructor(){
        super()
        this.state={x:10,y:30};
    }
    render(){
        return<>
        <h1 style={{color:'red',textAlign:'center'}}>Value of X is : {this.state.x}</h1>
        <h1 style={{color:'red',textAlign:'center'}}>Value of y is : {this.state.y}</h1>
        <h3 style={{textAlign:'center'}}>Add is : {this.state.x+this.state.y}</h3> 
        <h3 style={{textAlign:'center'}}>Sub is : {this.state.x-this.state.y}</h3>
        <h3 style={{textAlign:'center'}}>Mul is : {this.state.x*this.state.y}</h3>
        <h3 style={{textAlign:'center'}}>Div is : {(this.state.x /this.state.y).toFixed(3)}</h3>
        <h3 style={{textAlign:'center'}}>Mod is : {this.state.x % this.state.y}</h3>
        </>
        
    }
}
export default App3;