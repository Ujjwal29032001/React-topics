import React from "react"
class App extends React.Component {
    constructor(){
        super();
        this.state = {x:100};
        console.log("Constructor called...");
    }
    componentDidMount() {
        console.log("Did Mount Invoked : ");

        this.setState({x:200});
    }
    render(){
        console.log("Render Method Invoked : ");
        return<>
        <h1>Value of x is :{this.state.x}</h1>
        </>
    }
}export default App;