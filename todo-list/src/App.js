import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function Todo({ todo, index}) {
  const changeCompleted =(e)=>{
    e.preventDefault();
    
  }
  return (
    <div className="todo" style={{textDecoration:todo.isCompleted ? 'line-through' : ''}} onClick={changeCompleted}>
      {todo.text}
    </div>
  )
}
function TodoForm({addTodo}){
   const [value, setValue] = useState('');
   const handleSubmit = (e) => {
     e.preventDefault();
     if(!value) return;
       addTodo(value);
       setValue('');
   }
   return (
     <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input"
             value={value}
             placeholder="Add Todo..."
             onChange={e => setValue(e.target.value)}
        />
     </form>
   )
}
function App() {
  const [todos, setTodos] = useState([
    {
      text:'Learn about React',
      isCompleted: false
    },
    {
      text:'Meet friend for Lunch',
      isCompleted: false
    },
    {
      text:'Build really cool todo app',
      isCompleted: false
    },
  ])
  const addTodo = text => {
    const NewTodos = [...todos, { text: text, isCompleted:false }];
    setTodos(NewTodos);
  }
  return (
    <div className="app">
      <div className="todos">
        {todos.map((todo,ind)=>(
          <Todo key={ind} index={ind} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;
