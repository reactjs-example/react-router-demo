import { Link, Route, Routes } from "react-router-dom"
import { Book, BookList, NewBook } from "./Pages"

export const Example2 = ()=>{

    let content = `dynamic routing`;

    let styles = {
        color:'red',
        fontSize:'30px',
        style:'bold'
    }
    return <>
      <p style={styles}>{content}</p>
        <ul>
            <li><Link to="books">Book List</Link></li>
            <li><Link to="books/new">New Book</Link></li>
        </ul>
      <Routes>
        <Route path="/books" element={<BookList/>}/>
        <Route path="/books/:bookId" element={<Book/>}/>
        <Route path="/books/new" element={<NewBook/>}/>
      </Routes>
    </>

}