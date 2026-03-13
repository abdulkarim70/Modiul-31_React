import Book from "./book"
 export default function Library ({test1}){
    return(
        <div>
            <h2>My National Central Library</h2>
            <p>Book Collection:{test1.length}</p>
            <p>Address:</p>
            <ul>
                {
                  test1.map(book=> <Book key={book.id} book={book} ></Book> )  
                }
            </ul>
        </div>
    )
}