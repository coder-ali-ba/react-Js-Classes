import { useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function renderTodos() {
    if (inputValue.trim() === "") return; 
    setTodos([...todos, inputValue]); 
    setInputValue(""); 
  }

  function deleteAll() {
    setTodos([]); 
  }

  return (
    <>
      <div style={{ 
        border: "2px solid black", 
        padding: "10px", 
        paddingBottom:"30px", 
        borderRadius:"20px", 
        backgroundImage: "url('https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Fwww.todoist.com%2Fstatic%2Fproduct-ui%2Fbackgrounds%2Fwave-one-red.png')",
        backgroundSize: "cover",           
        backgroundRepeat: "no-repeat",     
        backgroundPosition: "center center"
        }}>
        <h1>ToDo List</h1>
        <input
          type="text"
          value={inputValue}
          style={{ lineHeight: "35px", marginRight: "10px" }}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button onClick={renderTodos} style={{backgroundColor:"green", color : "white", marginRight:"10px"}}>Add</button>
        <button onClick={deleteAll} style={{backgroundColor:"red", color : "white"}}>Del All</button>

        {todos.map((todo, index) => (
          <div
            key={index}
            style={{
              
              backgroundColor: "gray",
              marginTop:"10px",
              display : "flex",
              justifyContent : "space-between",
              borderRadius:"5px"
            }}
          >
            <h3 style={{
              paddingLeft: "5px",
            }}>{todo}</h3>
            <div style={{
              paddingTop : "12px",
              
              paddingRight:"5px"
            }}>
              <button style={{backgroundColor:"yellow", marginRight:"10px" }}>Edit</button>
              <button>Del</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
