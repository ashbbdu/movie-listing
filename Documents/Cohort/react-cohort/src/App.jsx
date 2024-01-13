

// import { useState } from 'react'
// import Header from './components/Header'
// import HeaderWithBtn from './components/HeaderWithBtn'
// import Todo from './components/Todo'

import { useEffect, useMemo, useState } from "react";

// function App() {

//   const [todos , setTodos] = useState([
//     { 
//         id : 1,
//         title : "First",
//         description : "First todo Descritpion" 
//     }, { 
//       id : 2,
//       title : "First",
//       description : "First todo Descritpion" 
//   },
//   { 
//     id : 3,
//     title : "First",
//     description : "First todo Descritpion" 
// }


// ])

// console.log(todos , "todo");

// const addTodo = () => {
//   setTodos(prevValue =>  [...prevValue , {
//     id : Math.random(),
//     title : "From Button",
//     description : "From button todo"
//   }])
// }

//   return (
//    <div>
   
//      <HeaderWithBtn />
//     <Header title="My name is Kirat" />
//     <Header title="My name is Kirat 2" />
    
//     {
//      todos.map((todo) => {
//         return (
//           <Todo title={todo.title} description={todo.description} key={todo.id} />
//         )
//      })
//     }

//     <button onClick={addTodo}>Add Todo</button>

//    </div>
//   )
// }

// export default App



// Wrapper components

// const App = () => {
// const [todos , setTodos] = useState([]);
//   const fetchTods = async () => {
//     const todo = await fetch("https://sum-server.100xdevs.com/todos");
//     const json = await todo.json()
//     console.log(json , "json");
//     setTodos(json.todos)
//   }

//   useEffect(() => {
//     // This will run the every 2 seconds
//    const timer =  setInterval(() => {
//       fetchTods()
//     },2000)
//     return () => {
//       clearInterval(timer)
//     }
//     // clearing the timer because if we move to other pages it will decrease the time
//     // please start backend again
//   },[])

//   return (
//     <div>
//       {/* <CardWrapper innerComponent={<TextComponent />} />
//       <CardWrapper innerComponent={<TextComponent2 />} /> */}
//       {/* How to actually do wrapper thing  // example auth layout ki tarah */} 
//       <CardWrapper>
//         Hi there
//       </CardWrapper>
//       <CardWrapper>
//         Hi there 2
//         <CardWrapper>
//             Nested Hi there 2
//         </CardWrapper>
//       </CardWrapper>

//       <div style={{marginTop : 50}}>
//         {
//           todos.map(todo => {
//             return (
//               <div key={todo.id}>
//                   <h1>{todo.title}</h1>
//                   <h2>{todo.description}</h2>
//               </div>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// // const TextComponent = () => {
// //   return (
// //     <div>Hi there</div>
// //   )
// // }

// // const TextComponent2 = () => {
// //   return (
// //     <div>Hi there</div>
// //   )
// // }

// // const CardWrapper = ({innerComponent}) => {
// //   return (
// //     <div style={{border : "2px solid black"}}>
// //       {innerComponent}
// //     </div>
// //   )
// // }

// const CardWrapper = ({children}) => {
//   return (
//     <div style={{border : "2px solid black"}}>
//       {children}
//     </div>
//   )
// }

// export default App


const App = () => {
  const [number , setNumber] = useState(0)
  // const [total , setTotal] = useState(0)
  const [count , setCount] = useState(0)

// useMemo is one approach and other approach is using useEffect
  let totalNum = useMemo(() => {
    let finalCount = 0;
    for(let i = 1 ; i <= number ; i++) {
      finalCount = finalCount + i;
      console.log("ash");
    }
    return finalCount;
  },[number])

  


  // useEffect(() => {
  //   sum()
  // },[number])
  return (
    <div>
        <input type="number"  onChange={(e) => setNumber(e.target.value) }  /><br/>
      <div>Sum is {totalNum}</div>
    
      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Counter {count}</button>
    </div>
  )
}

export default App

