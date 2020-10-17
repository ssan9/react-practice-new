https://codesandbox.io/s/fetch-and-show-a-list-of-game-of-thrones-books-base-forked-dpofj?file=/src/index.js

import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./api-get-books.css";

function App() {
  const [books, setBooks] = useState('');
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const fetchData = () => {
    console.log(apiURL);
    return fetch(apiURL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => setBooks(data))
  }

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books && books.map((book, i) => { 
          const authors = book.authors.join(', ');
          const released = new Date(book.released).toDateString(); 
    
          return (
            <div className="book" key={i}>
              <h3>Book {i + 1}</h3>
              <h2>{book.name}</h2>

              <div className="details">
                <p>👨: {authors}</p>
                <p>📖: {book.numberOfPages}</p>
                <p>🏘️: {book.country}</p>
                <p>⏰: {released}</p>
              </div>
            </div> 
          )})
       }
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
