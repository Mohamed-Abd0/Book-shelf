
import Book from "./Book";


const Shelf= ({books , name , onMoveBook })=>{
    


    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    
                    {books.map((book)=>( <Book key={book.id} bookInfo={book} onMoveBook={onMoveBook} /> ))};
                        
                </ol>
            </div>
        </div>
    )
};
export default Shelf;