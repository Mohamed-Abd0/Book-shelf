
import Shelf from "../Components/Shelf";
import { Link } from "react-router-dom";


const Home_page = ({data , onMoveBook })=>{
    
    const shelfs_names = ['currentlyReading' , 'wantToRead' , 'read']

    // check if the data is full or embty 
    if( data[0] ){
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <Shelf books= {data.filter(b=>b.shelf === shelfs_names[0])} name={shelfs_names[0]} onMoveBook={onMoveBook}/>
                    <Shelf books= {data.filter(b=>b.shelf === shelfs_names[1])} name={shelfs_names[1]} onMoveBook={onMoveBook}/>
                    <Shelf books= {data.filter(b=>b.shelf === shelfs_names[2])} name={shelfs_names[2]} onMoveBook={onMoveBook}/>
                </div>
                <div className="open-search">
                    <Link to={"/search"}/>  
                </div>
            </div>
        )
    }else{
        return null
    }

};

export default Home_page;