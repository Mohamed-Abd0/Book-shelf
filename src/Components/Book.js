



const Book = ({bookInfo , onMoveBook })=>{


    const onChangeHandler =  (e) =>{
        const shelf  = e.target.value;
        
        // lift the state up to rerender the app
        onMoveBook(bookInfo , shelf)
    };

    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 
                        (bookInfo.imageLinks !== null && bookInfo.imageLinks !== 0 && bookInfo.imageLinks)  ?
                         `url(${bookInfo.imageLinks.thumbnail})`
                        :
                        `url(https://via.placeholder.com/128x192/000000/FFFFFF/?text=no-image)`
                    }}
                    ></div>
                
                    <div className="book-shelf-changer">
                        <select value={bookInfo.shelf} onChange={onChangeHandler}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ bookInfo.title } </div>
                <div className="book-authors"> { bookInfo.authors }
                </div>
            </div>
        </li>
    )
};
export default Book;