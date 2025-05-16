function App1(){
   var x = 10;
   var y = 20;

   return<div>
    <h1 style={{color:'green',background:'yellow',textAlign:'center'}}>
      App Component Called...
      </h1>
      <h1>Value of x is : {x}</h1>
      <h1>Value of y is : {y}</h1>
      <h2>Add is : {x+y}</h2>
      <h2>Sub is : {x-y}</h2>
      <h2>Mul is : {x*y}</h2>
      <h2>Div is : {x/y}</h2>
      <h2>Mod is : {x%y}</h2>
      <h3>{(x>y) ? "X is greater.." : "Y is greater.."}</h3>

   </div>
}
export default App1;