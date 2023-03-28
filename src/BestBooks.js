import React from 'react';
import axios from 'axios'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  getBooks = async () => {
    try{
      let url = `${process.env.REACT_APP_SERVER}/books`
      let bookData = await axios.get(url)
      this.setState({
        books: bookData.data
      })
    }
    catch(error){
      console.log(error.response)
    }
  }

// *** REACT LIFESTYLE METHOD ***
componentDidMount(){
  this.getBooks();
}


  render() {
    console.log(this.state.books);

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
