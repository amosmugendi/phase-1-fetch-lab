function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response=>{
    if(!response.ok){
      throw new Error('Neetwork response was not ok')
    }
    return response.json();
  })
  .then(function(data){
    renderBooks(data)
  })
  .catch(error=> console.error('error fetching books:', error),)
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
