// export default function Todo({task, isDone}){
//     return(
//         <li>Task:{task} </li>
//     )
// }
// export default function Todo ({task, isDone}){
// if(isDone===true){
//     return <li>Done:{task}</li>
// }
// else{
//     return <li> Do Now{task}</li>
// }
// }

// export default function Todo ({task, isDone, time=0}){
// if(isDone===true){
//     return <li>Done:{task} duration:{time}</li>
// }
// return <li>To Be Done: {task}</li>
// }

// // Conditional Rendering by Ternary
// export default function Todo({task, isDone, time=0}){
// return isDone?
//  <li> Done:{task} Time:{time}</li>
//   :<li>Not Done:{task}</li>
// }

// export default function Todo({task, isDone, time=0}){
// return isDone && <li>Done Task:{task} time:{time}</li>
// }
// export default function Todo({task, isDone, time=0}){
// return isDone || <li> Not Done Task:{task} time:{time}</li>
// }

// export default function Todo ({task, isDone}){
// // if(isDone===true){
// //     return <li>Done:{task}</li>
// // }
// // else{
// //     return <li> Do Now{task}</li>
// // }
// // }



export default function Todo ({task, isDone, time}){
    const displayTime= time?time:105
    let listItem;
 if(isDone===true){
    listItem= <li>Done:{task} time:{displayTime}</li>
}
 else{
    listItem= <li> pending: {task}</li>
}
return listItem
 }