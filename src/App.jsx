
import './App.css'
import Todo from './todo'
import actor from './actor'
import Nayok from './actor'
import Singer from './singer'
import Library from './library'

function App() {
  
// const time=50
const actors=['Bapp Raj', 'Omor Sani', 'Salman Sah', 'jasim', 'anower']
const singers=[
  {id:1, name:'dr Mahfuz', age:68},
  {id:2, name:'tahsan', age:45},
  {id:3, name:'Suvro Dev', age:57}
]
const books=[
  {id:1, name:'physics', price:250},
  {id:2, name:'chemistry', price:450},
  {id:3, name:'bengali', price:50},
  {id:4, name:'history', price:550}
]
  return (
    <>
      
      <h1>React Core Concept</h1>

      <Library test1={books}></Library>
    {
      singers.map(singer=> <Singer key={singer.id} test={singer}></Singer>)
    }

{
  actors.map(actor=> <Nayok actor={actor}></Nayok>)
}


      {/* <Todo task="learn React" isDone={true} time={time} > </Todo>
      <Todo task="Revise Js" isDone={false}> </Todo>
      <Todo task="Take A Shower" isDone={true} > </Todo> */}
       {/* <Student></Student>
        <Person></Person>
        <Player name="Abdul Karim" runs="20"></Player>
  
        <Player name="Najir" runs="30"></Player>
  
        <Player name="Jobbar" runs="50"></Player>
  <Salami event="Eid Ul Fitr" amount="5000tk"></Salami>
  <Salami event="Eid Ul Adha" amount="4000tk"></Salami> */}
    </>
  )
}

function Salami({ event, amount}){
  return(
    <div className='student'>
<p>Salami For:{event}</p>
<p>Salami Amount:{amount}</p>
    </div>
  )
}


const props={}
function Player({name, runs}){
  console.log(props)
  return(
    <div className='student'>
<h3>Player Name:{name}</h3>
<p>Runs:{runs}</p>
    </div>
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
  const personStyle={ color:'red'}
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
