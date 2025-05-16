function App10() {
    var x = 0;
    var y = 0;
    var z = 0;

    var add= ()=>{
        //Get Data From JS
        x = parseInt(document.getElementById('a').value);
        y = parseInt(document.getElementById('b').value);
        z = x+y;
        alert("Value of z is :"+z);

    }
        return <>
         <input type="text" id="a"  placeholder="Enter the Value of x"/>&nbsp;&nbsp;
         <input type ="text" id="b" placeholder="Ënter the Value of y"/>&nbsp;&nbsp;
         <button onClick={add}>Click Here !</button>
         <button>
            <h1>Value of x is:{x}</h1>
            <h1>Value of Y is: {y} </h1>
            <h1>Value of Z is: {z} </h1>
         </button>
        </>
    }

export default App10;