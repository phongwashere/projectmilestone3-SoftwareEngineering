import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/list'

function App() {
  const [result, setResult] = useState([])

  useEffect(() => {
    fetch('/get')
    .then(response => response.json())
    .then(data => {setResult(data.results)})
    .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <a className="App-link" href="/forum">main page</a>
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
      </header>
    </div>
  );
}

export default App;
