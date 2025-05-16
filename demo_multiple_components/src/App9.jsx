import React from "react";
class App2 extends  React.Component{
          constructor(){
            super();
            this.state = {x:10};
          }
          render(){
            return<>
            <h1 style={{color:'red',textAlign:'center'}}>Value of x is : {this.state.x}</h1>
            </>
          }
}
export default App2;