import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyAmkiaqUd1mWt_TbyK2DFCsCHJLXyOPmEI";



export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Searches for a book
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  }
};