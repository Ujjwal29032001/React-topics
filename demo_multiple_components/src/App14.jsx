import React from "react"
class App extends  React.Component {
    constructor(){
        super();
        console.log("Constructor Called...")
    }
    componentDidMount(){
        console.log("Did Mount Invoked : ");
    }
    componentDidUpdate(){
        console.log("Did update Invoked : ");
    }
    componentWillUnmount(){
        console.log("Will unount Invoked : ");
    }
    render() {
        console.log("Render Method Invoked : ");
    }
}
export default App;