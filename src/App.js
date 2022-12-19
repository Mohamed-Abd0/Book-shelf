import "./App.css";
import { useState, useEffect } from "react";
import * as  booksAPI from "./BooksAPI";
import SearchPage from "./pages/Search";
import HomePage from "./pages/Home";
import {Routes , Route} from "react-router-dom"

function App() {

  // define a state of catigurized books array  
  const [catigorizedBooks , setCatigorizedBooks]= useState([]);



  // get the all books on my shelfs
  const get_books = async ()=>{
    const res = await booksAPI.getAll();
    setCatigorizedBooks(res)

    // check the data come from the server
    console.log( "this data come from the server after using getAll() " , res)

  } 



  useEffect(()=>{
    // invoke get_books function to get the data 
    get_books(); 

    console.log("I am here in useEffect")
    
  },[]);
  


  // move the book to the selected shelf and get the the updated shelfs
  const moveBook = async (bookInfo , shelf)=>{

    // move the selected book to the wanted shelf
    await booksAPI.update(bookInfo , shelf );

    // get the updated data after moving the book and rerender the app
    get_books();
  }

 
  return (
    <div className="app">
      <Routes>
        <Route path="/"       element= {<HomePage  data={catigorizedBooks} onMoveBook={moveBook} />} />
        <Route path="/search" element={<SearchPage data={catigorizedBooks} onMoveBook={moveBook}/>} />
      </Routes>
    </div>
  );
}

export default App;
