import React from "react";
import { Col, Row } from "../../components/Grid";
import "./style.css";

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
                        <h4 className="bookTitle">{book.title}</h4>
                        <h5 className="bookAuthor">{book.author}</h5>
                        <p className="bookDescription truncate">{book.description}</p>
                    </Col>
                  </Row>
                  <br></br>
                  <Row className="buttonDiv ">
                    <button className="saveBook waves-effect waves-light btn indigo darken-4 right" id={book.id} onClick={(event) => props.handleSaveButton(event)}>
                      Save Book
                    </button>
                    <a href={book.link} target="_blank">
                      <button className="viewBook waves-effect waves-light btn indigo darken-4 right">
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
