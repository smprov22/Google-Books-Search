import React from "react";
import { Col, Row } from "../../components/Grid";

const SearchResults = props => {
  return (props.books.length === 0) ? (
    <div className="card">
      <div className="card-body">
        <div className="results">
          <h5>Results will appear here</h5>
        </div>
      </div>
    </div>
  ) : (
      <div className="card">
        <div className="card-body">
          <div className="results">
            <h5>Search Results</h5>
            {props.books.map(book => {
              return (
                <li className="search-list list-group-item">
                  <Row className="SearchResult row" id={book.title + "Card"} key={book.id}>
                    <Col size="2" className="bookImage">
                      <img src={book.image} alt={book.title} />
                    </Col>
                    <Col size="1" className="emptyCol" />
                    {/* col-9 show information of the book */}
                    <Col size="9" className="bookInfo">
                      <Row>
                        <h4 className="bookTitle">{book.title}</h4>
                      </Row>
                      <Row>
                        <h5 className="bookAuthor">{book.author}</h5>
                      </Row>
                      <Row>
                        <p className="bookDescription truncate">{book.description}</p>
                      </Row>
                    </Col>
                  </Row>
                  <br></br>
                  <Row className="buttonDiv ">
                    <button className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                      Save Book
                    </button>
                    <a href={book.link} target="_blank">
                      <button className="viewBook btn btn-success">
                        View Book
                      </button>
                    </a>
                  </Row>
                </li>
              )
            })}
          </div>
        </div>
      </div>
    )
}

export default SearchResults;
