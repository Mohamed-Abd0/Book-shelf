import { useState } from "react";
import { Link } from "react-router-dom";
import * as BookAPI from "../BooksAPI";
import Book from "../Components/Book";


const Search_page = ({ data , onMoveBook })=>{

    
    const [searchResult , setSearchResult ] = useState([]);


    
    const onChangeHandler = async (e)=>{
        if (e.target.value === ""){
            setSearchResult([]);
        }else{
            const  res= await BookAPI.search(e.target.value)
            // check on the response 
            console.log( "this data come from the server after search" , res);
            // handling the  error response
            (res.error) ? (setSearchResult([])) : setSearchResult(res) ;
             
        }
        
    };

    if(data[0]){
    

        /*
            {match the receved books with the books on my shelfs} 

        if the book come from the search exist on my shelfs => give it it`s shelf 
        if the book  does not  exist on my shelfs           => give it none 

         */
        let matchedBooks =  searchResult.map((book)=>{
            let matched_book =  ( data.filter((b)=> book.id===b.id));
            if(matched_book[0]){
                return matched_book[0]
            }else{
                let modified_book = {...book , shelf:"none"}
                return modified_book
            }
        })

        // check the matchedBooks
        console.log("this data after matching" , matchedBooks)

        
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={"/"} className="close-search"/>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            onChange={onChangeHandler}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                        (matchedBooks[0])?
                        (matchedBooks.map((book)=> <Book key={book.id} bookInfo={book} onMoveBook={onMoveBook}/>))
                        :
                        (<li> please enter valid name</li>)
                        }   
                    </ol>
                </div>
            </div>
        )
    }else{
        return null
    }
}

export default Search_page;