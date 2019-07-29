import React from "react";

function SearchResults(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.image} style={{ margin: "0 auto" }} />
      <p>Author(s): {props.author}</p>
      <h3>Description: {props.description}</h3>
      <h3>Link: {props.link}</h3>
    </div>
  );
}

export default SearchResults;
