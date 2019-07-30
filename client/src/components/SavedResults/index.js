import React from "react";
import {Row, Col} from "../Grid"
import "./style.css";

const SavedResults = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body">
                <div className="results">
                    <h3>Books that You Saved</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h5>Books that You Saved</h5>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                            <h4 className="bookTitle">{savedbook.title}</h4>
                                            <h5 className="bookAuthor">{savedbook.authors}</h5>
                                            <p className="bookDescription truncate">{savedbook.description}</p>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                    <button className="deleteBook waves-effect waves-light btn red darken-2" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book
                                    </button>
                                    <a href={savedbook.link} target="_blank">
                                        <button className="viewBook waves-effect waves-light btn indigo darken-4">
                                            View Book
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResults
