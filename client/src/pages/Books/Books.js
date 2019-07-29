import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Card from "../../components/Card";
import SearchResults from "../../components/SearchResults";

class Books extends Component {
  // Setting our component's initial state
  state = {
    result: {},
    search: ""
  };

  searchBooks = query => {
    API.searchBooks(query)
      .then(res => {
        console.log(res.data)
        this.setState({ result: res.data })
        console.log(this.state.result.items[2].volumeInfo.title)
        console.log(this.state.result.items[2].volumeInfo.authors[0])
        console.log(this.state.result.items[2].volumeInfo.description)
        console.log(this.state.result.items[2].volumeInfo.imageLinks.thumbnail)
        console.log(this.state.result.items[2].volumeInfo.canonicalVolumeLink)
      // (res => this.setState({ result: res.data }))
    })
      .catch(err => console.log(err));
      
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
      this.searchBooks(this.state.search);
      this.setState({search: ""});
      
        // .then(res => this.loadBooks())
        // .catch(err => console.log(err));
    
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="sm-12">
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h4>Search for and Save books of interest</h4>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <div className="searchbox container">
              <h5>Book Search</h5>
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
            <div className="searchResults container">
              <h5>Search Results</h5>
            <Card
              heading={this.state.result.Title || "Search Results"}
            > {this.state.result.Title ? (
                <SearchResults
                  title={this.state.result.items[2].volumeInfo.title}
                  author={this.state.result.items[2].volumeInfo.authors[0]}
                  description={this.state.result.items[2].volumeInfo.description}
                  image={this.state.result.items[2].volumeInfo.imageLinks.thumbnail}
                  link={this.state.result.items[2].volumeInfo.canonicalVolumeLink}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
