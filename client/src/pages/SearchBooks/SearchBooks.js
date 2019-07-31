import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import SearchResults from "../../components/SearchResults";
import "./style.css";

class SearchBooks extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    search: ""
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    
    API.searchBooks(this.state.search)
    .then(res => {
      console.log(res.data)
      let results = res.data.items 

      results = results.map(result => {
        result = {
          key: result.id,
          id: result.id,
          title: result.volumeInfo.title,
          author: (result.volumeInfo.authors.length > 1) ? result.volumeInfo.authors.join(", ") : result.volumeInfo.authors,
          description: result.volumeInfo.description,
          image: result.volumeInfo.imageLinks.smallThumbnail,
          link: result.volumeInfo.infoLink
        }
        return result
      })
      this.setState({ books: results })
      this.setState({search: ""});
  })
    .catch(err => console.log(err)); 
  };

  handleSaveButton = event => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    console.log(savedBooks)
    API.saveBook(savedBooks)
        .then(alert(`${savedBooks.title} has been saved`))
        .catch(err => console.log(err))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1 className="headline" style={{fontFamily: "Roboto"}}>Google Books Search</h1>
              <h4 className="subtitle" style={{fontFamily: "Roboto"}}>Search for and Save books of interest</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="searchbox container">
              <h5 style={{fontFamily: "Roboto"}}>Book Search</h5>
              <form>
                <Input
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  name="search"
                  placeholder="Title (required)"
                />
                <FormBtn
                  disabled={!(this.state.search)}
                  onClick={this.handleFormSubmit}
                >
                  Search Book
                </FormBtn>
              </form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="container results">
              <SearchResults books={this.state.books} handleSaveButton={this.handleSaveButton}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchBooks;
