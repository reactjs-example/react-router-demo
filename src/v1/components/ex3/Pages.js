import { Link, useParams } from "react-router-dom"


const BookList = ()=>{

    let style={
        paddingLeft: '25px'
    }
    const books = [
        {id:1,name:'book1'},
        {id:2,name:'book2'}
    ]

    return <>
        <ul>
            {books.map((book)=>{
                return <li key={book.id}>{book.name}
                <span style={style}>
                <Link to={`${book.id}`}>View</Link>
                </span>
                </li>
            })}
        </ul>
    </>
}

const Book=()=>{

    let {bookId} = useParams(); // retrieved the bookId
    return <>
      {bookId}
    </>
}

const NewBook = ()=>{
    return <>
    <h1>New Book</h1>
    </>
}
export {BookList, Book, NewBook}