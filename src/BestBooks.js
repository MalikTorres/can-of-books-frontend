import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import './bestBooks.css';
import Button from 'react-bootstrap/Button';
import ModalData from './ModalData'
// import { Next } from 'react-bootstrap/esm/PageItem';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    }
  }

  handleOpenModal = (event) => {
    // console.log()
    this.setState({
      showModal: true,
    })
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }



  // handleBookSubmit = (event) => {
  //   event.preventDefault();

  //   let bookObj = {
  //     title: event.target.title.value,
  //     description: event.target.description.value,
  //     status: event.target.status.checked
  //   }
  //   console.log(bookObj);
  //   this.postBook(bookObj)
  // }

  updateBook = async (bookObjToUpdate) => {
    try {

      // TODO: URL for axios
      let url = `${process.env.REACT_APP_SERVER}/ books/ ${bookObjToUpdate._id}}`

    let updatedBook = await axios.put(url,bookObjToUpdate)

    let updatedBookArray = this.state.books.map(existingBook => {
      return existingBook._id === bookObjToUpdate._id 
      ? updatedBook.data
      : existingBook
    })

    this.setState({
      books: updatedBookArray
    })

  } catch (error) {
    console.log(error.message)
  }
}



postBook = async (bookObj)=>{
  try{
let url = `${ process.env.REACT_APP_SERVER } /books`

    let createdBook = await axios.post(url, bookObj);

    this.setState({
      books: [...this.state.books, createdBook.data]
    })

  }catch(error) {
    console.log(error.message)
  }
}


/* TODO: Make a GET request to your API to fetch all the books from the database  */
getBooks = async () => {
  try {
    let url = `${process.env.REACT_APP_SERVER}/books`
    let bookData = await axios.get(url)
    console.log(bookData)
    this.setState({
      books: bookData.data
    })
  }
  catch (error) {
    console.log(error.response)
  }
}

// *** REACT LIFESTYLE METHOD ***
componentDidMount() {
  this.getBooks();
}

// TODO: SEND DATA VIA AXIOS WHEN DELETE BUTTON IS CLICKED
deleteBook = async (id) => {
  // TODO: REPLACE ID WITH ID OF THE BOOK THROUGH STATE 
  try {
    let url = `${process.env.REACT_APP_SERVER}/books/${id}`
    console.log(id);
    await axios.delete(url);

    let updatedBooks = this.state.books.filter(book => book._id !== id);

    this.setState({
      books: updatedBooks
    })
  } catch (error) {
    console.log(error.response);
  }

}


render() {
  // console.log(this.state.books);

  /* TODO: render all the books in a Carousel */

  return (
    <>

      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {this.state.books.length > 0 ? (
        <>
          <ModalData
            handleCloseModal={this.handleCloseModal}
            showModal={this.state.showModal}
            postBook={this.postBook}
          />
          <Carousel id='caro'>
            {this.state.books.map((element, idx) =>
              <Carousel.Item key={idx}>

                <img
                  className="d-block w-100"
                  src="https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y296eSUyMHJlYWRpbmd8ZW58MHx8MHx8&w=1000&q=80"
                  alt="First slide"
                />
                <Carousel.Caption id='caroCap'>
                  <h3>{element.title}</h3>
                  <p>{element.description}</p>
                  <div>
                    <Button onClick={() => { this.deleteBook(element._id) }}>DELETE </Button>
                    <Button onClick={this.handleOpenModal}>Add New Book</Button>
                    <Button>Update</Button>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

            )}
          </Carousel>
        </>
      ) : (
        <h3>No Books Found :(</h3>
      )}
    </>
  )
}
}

export default BestBooks;
