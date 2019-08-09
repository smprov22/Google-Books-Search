# Google-Books-Search

https://google-books-search22.herokuapp.com/

 ![google-books-app-screenshot](/client/public/screenshots/screenshot.PNG)
 
 This is a react app where users can search for their favorite books and save them to a database.  Simply add a book title to the search bar and click search. After a few seconds, the search results will appear in the "Search Results" area at the bottom of the screen.  The user can click buttons to save a book or view a book.  If the user clicks "View Book", they will be redirected to the google books page for that specific book.  If the user clicks "Save Book", the book will be saved to a database and the user can view all their saved books by clicking the "Saved Books" button at the top of the page.  On the Save Page, the user again has the option to view their book on the google books page, or they can delete the book from their saved list.
 
 The app uses React, MongoDB, Mongoose, Google Books API, Express, Node, CSS, Javascript and more to display the search and saved results.  When a user saves a book, the information for that book is saved using MongoDB.  The book will stay saved in the database until it is removed using the delete button. 
