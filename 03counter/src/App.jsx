import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter  = 5
//making arrow function
  const addValue = () =>{
    
   //counter = counter + 1 
   if(counter<20){
    setCounter(counter+1)
    console.log("Value added",counter );
   }else{
    console.log("value cant be go above 20")
   }
   
  }
//making arrow function 
  const removeValue = () => {
    if(counter>0){
    setCounter(counter-1)
   
  } else {
    console.log("value can't be below zero")
  }
}

  return (
    <>
     <h1>counter with sudip</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}
     >Add value</button>
     <br />
     <button onClick={removeValue}
     >Remove value {counter}</button>
    </>
  )
}

export default App
