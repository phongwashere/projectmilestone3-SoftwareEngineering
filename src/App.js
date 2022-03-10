import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/list'

function App() {
  const [currentFact, setCurrentFact] = useState("Iron Man go Burrr")
  const [result, setResult] = useState([])

  useEffect(() => {
    fetch('/get')
    .then(response => response.json())
    .then(data => {setResult(data.results)})
    .catch(error => console.log(error))
  }, [])

  function handleClick(){
    if(currentFact != 'Iron Man go Burrr'){
      setCurrentFact('Iron Man go Burrr')
    } else {
      setCurrentFact('Screw Iron Heart')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
      <a className="App-link" href="/forum">main page</a>
        <img src="https://pngimg.com/uploads/ironman/ironman_PNG91.png" className="App-logo" alt="logo"/>
        <p>{currentFact}</p>  
        <button onClick={handleClick}>I'm a button!</button>
        <h2>Your Comments and Ratings</h2>
        <form method="POST" action="/edit">
          Edit your comments:<br></br>
          which comment ID# do you want to edit?:<input type="integer" name="id"/><br></br>
          Rating(out of 5):<select name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select><br></br>
          Review:<input type="text" name="review"/><br></br>
          <input type="submit" value="Edit Your Review!"/>
        </form>
        <div><List result={result}></List></div>
        <a
          className="App-link"
          href="https://i.pinimg.com/474x/ab/23/2c/ab232cbe480ab36c5ebd4c2026f53895.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about ironman!
        </a>
      </header>
    </div>
  );
}

export default App;
