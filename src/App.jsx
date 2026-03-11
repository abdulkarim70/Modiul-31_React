
import './App.css'

function App() {
  

  return (
    <>
      
      <h1>React Core Concept</h1>
       <Student></Student>
        <Person></Person>
  
    </>
  )
}

function Student(){
  return(
    <div className='student'>
      <p>
      Name:  
      </p>
      <p>
Dept:
      </p>
    </div>
  )
}



function Person(){
  const age=17
  const personStyle={ color:red}
  return(
    <p style={personStyle}>I am  a Person{age}</p>
  )
}
 function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
    </div>
  )
 }

export default App
