# Google-Book-API-Search-Engine

# Outline

A web UI for the Google Books API using Javascript ,HTML and SCSS.

# MVP

The project allows the users to search for books from Google API.The page includes the following sections:

## Header:

Introduces the page which contains a text and search button.

## Book Grid:

When the submit button is clicked ,a request is sent to Google books API using the input value as query string. Async / await is used to request the code.

The books received are rendered in the books grid format.

Each book in the grid have an image, author and title.

The grid is responsive in different screen sizes.

## Extra Features:

When no book results are found, the project renders "No results found with Search value".
When a user clicks a book in the grid, a modal appear with more book information.
The project has next and previous buttons.At one time, book grid shows maximium 20 results.
