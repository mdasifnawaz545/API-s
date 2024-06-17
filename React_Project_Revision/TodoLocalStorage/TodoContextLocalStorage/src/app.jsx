import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Card from './components/TodoList.jsx'
import { TodoContextProvider } from './context/TodoContext.js'
import InputBox from './components/InputBox.jsx'
import TodoList from './components/TodoList.jsx'

export function App() {

  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    let todoObj = {
      id: '2',
      todoTask: todo,
      isDone: false
    }
    setTodo((prev) => ([...prev, todoObj]))
  }

  const editTodo = (id, todo) => {
    setTodo((prev) => {
      const updatedTodo = prev.map((el) => {
        if (el.id === id) {
         el.todoTask=todo
         return el;

        }
        else {
          return el;
        }
      }

      )
      return updatedTodo;
    })
  }

  const deleteTodo = (id) => {
    setTodo((prev) => {
      const updatedTodo = prev.filter((el) = (el.id !== id))
      return updatedTodo;
    })
  }

  const completeTodo = (id) => {
    setTodo((prev) => {
      let updatedTodo = prev.map((el) => {
        if (el.id === id) {
          el.isDone = true;
          return el;
        }
        else return el;
      });

    })
  }

  return (
    // <TodoContextProvider value={{ todos, addTodo, editTodo, deleteTodo, completeTodo }}>
    <>
      <div style={{backgroundImage: `url("https://res.cloudinary.com/dpqdgcipi/image/upload/v1718629371/yfjvxpiaf2w4yedzu3wp.png")`}} className=' bg-cover flex flex-col w-full min-h-screen flex items-center justify-center gap-8'>
        <figure className='flex justify-center items-center gap-4 text-3xl font-bold ' >
          <img src="https://res.cloudinary.com/dpqdgcipi/image/upload/v1718629369/p1lyotfklifgzfm4hspu.png" width={30} alt="" />
          <figcaption className='first-letter:text-blue-400 tracking-widest text-white'>Salaam</figcaption>
        </figure>
        <InputBox/>
        <TodoList/>
      </div>
      </>
    // </TodoContextProvider>
  )
}
