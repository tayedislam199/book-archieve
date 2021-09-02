const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';

    if (searchText === '') {
        document.getElementById('no-of-result').innerHTML = `<h3>Please Write Something</h3>`;
    }
    else {
        document.getElementById('no-of-result').innerHTML = '';
        document.getElementById('search-result').innerHTML = '';
        //creating dynamic url
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json(res))
            .then(data => displayBook(data.docs));
    }

}

const displayBook = books => {

    console.log(books);
    const noOfResults = books.length;
    document.getElementById('no-of-result').innerHTML = `<h4>${noOfResults} Results Found`;

    //taking first 15 books from the books array
    const firstFifteenBooks = books.slice(0, 15);

    const searchResult = document.getElementById('search-result');
    firstFifteenBooks.forEach(book => {
        console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
         <div class="card">
           <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top w-25" alt="...">
           <div class="card-body">
             <h5 class="card-title">Book Name:${book.title}</h5>
             <h5 class="card-title">Author Name:${book.author_name}</h5>
             <h5 class="card-title">First Published Year:${book.first_publish_year}</h5>
           
           </div>
         </div>
       
 
         `;
        searchResult.appendChild(div);
    });

}