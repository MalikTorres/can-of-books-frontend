import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import './bestBooks.css';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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


  render() {
    console.log(this.state.books);

    /* TODO: render all the books in a Carousel */

    return (
      <>

        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <>
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
