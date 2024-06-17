document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let bookName = document.getElementById('book-name').value;
    let authorName = document.getElementById('author-name').value;
    let bookDescription = document.getElementById('book-description').value;
    let addedDate = document.getElementById('added-date').value;
    let bookCategory = document.getElementById('book-category').value;
    let bookPrice = document.getElementById('book-price').value;

    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

    let newBook = {
        name: bookName,
        author: authorName,
        description: bookDescription,
        date: addedDate,
        category: bookCategory,
        price: bookPrice
    };

    bookList.push(newBook);
    localStorage.setItem('book-list', JSON.stringify(bookList));

    alert('Book added successfully');
    document.getElementById('book-form').reset();
    renderBookTable();
});

function renderBookTable() {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let bookTableBody = document.querySelector('#book-table tbody');
    bookTableBody.innerHTML = '';

    bookList.forEach((book, index) => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = book.name;
        row.appendChild(nameCell);

        let authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);

        let categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        let priceCell = document.createElement('td');
        priceCell.textContent = book.price;
        row.appendChild(priceCell);

        let buyCell = document.createElement('td');
        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', function() {
            moveToBuyList(index);
        });
        buyCell.appendChild(buyButton);
        row.appendChild(buyCell);

        let bookmarkCell = document.createElement('td');
        let bookmarkButton = document.createElement('button');
        bookmarkButton.textContent = 'Bookmark';
        bookmarkButton.addEventListener('click', function() {
            moveToBookmarkList(index);
        });
        bookmarkCell.appendChild(bookmarkButton);
        row.appendChild(bookmarkCell);

        bookTableBody.appendChild(row);
    });

    updateBookCount();
}

function moveToBuyList(index) {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];

    buyList.push(bookList[index]);
    localStorage.setItem('buy-list', JSON.stringify(buyList));

    bookList.splice(index, 1);
    localStorage.setItem('book-list', JSON.stringify(bookList));

    renderBookTable();
    renderBuyTable();
}

function moveToBookmarkList(index) {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];

    bookmarkList.push(bookList[index]);
    localStorage.setItem('bookmark-list', JSON.stringify(bookmarkList));

    bookList.splice(index, 1);
    localStorage.setItem('book-list', JSON.stringify(bookList));

    renderBookTable();
    renderBookmarkTable();
}

function updateBookCount() {
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];
    document.querySelector('#dashboard h1').textContent = `Dashboard (${bookList.length} books)`;
}

document.getElementById('filter-category').addEventListener('change', function() {
    let selectedCategory = this.value;
    let bookList = JSON.parse(localStorage.getItem('book-list')) || [];

    if (selectedCategory === 'All') {
        renderBookTable();
    } else {
        let filteredBooks = bookList.filter(book => book.category === selectedCategory);
        renderFilteredBooks(filteredBooks);
    }
});

function renderFilteredBooks(filteredBooks) {
    let bookTableBody = document.querySelector('#book-table tbody');
    bookTableBody.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = book.name;
        row.appendChild(nameCell);

        let authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);

        let categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        let priceCell = document.createElement('td');
        priceCell.textContent = book.price;
        row.appendChild(priceCell);

        let buyCell = document.createElement('td');
        let buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', function() {
            moveToBuyList(index);
        });
        buyCell.appendChild(buyButton);
        row.appendChild(buyCell);

        let bookmarkCell = document.createElement('td');
        let bookmarkButton = document.createElement('button');
        bookmarkButton.textContent = 'Bookmark';
        bookmarkButton.addEventListener('click', function() {
            moveToBookmarkList(index);
        });
        bookmarkCell.appendChild(bookmarkButton);
        row.appendChild(bookmarkCell);

        bookTableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    renderBookTable();
    renderBuyTable();
    renderBookmarkTable();
});

function renderBuyTable() {
    let buyList = JSON.parse(localStorage.getItem('buy-list')) || [];
    let buyTableBody = document.querySelector('#buy-table tbody');
    buyTableBody.innerHTML = '';

    buyList.forEach(book => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = book.name;
        row.appendChild(nameCell);

        let authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);

        let categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        let priceCell = document.createElement('td');
        priceCell.textContent = book.price;
        row.appendChild(priceCell);

        buyTableBody.appendChild(row);
    });
}

function renderBookmarkTable() {
    let bookmarkList = JSON.parse(localStorage.getItem('bookmark-list')) || [];
    let bookmarkTableBody = document.querySelector('#bookmark-table tbody');
    bookmarkTableBody.innerHTML = '';

    bookmarkList.forEach(book => {
        let row = document.createElement('tr');

        let nameCell = document.createElement('td');
        nameCell.textContent = book.name;
        row.appendChild(nameCell);

        let authorCell = document.createElement('td');
        authorCell.textContent = book.author;
        row.appendChild(authorCell);

        let descriptionCell = document.createElement('td');
        descriptionCell.textContent = book.description;
        row.appendChild(descriptionCell);

        let dateCell = document.createElement('td');
        dateCell.textContent = book.date;
        row.appendChild(dateCell);

        let categoryCell = document.createElement('td');
        categoryCell.textContent = book.category;
        row.appendChild(categoryCell);

        let priceCell = document.createElement('td');
        priceCell.textContent = book.price;
        row.appendChild(priceCell);

        bookmarkTableBody.appendChild(row);
    });
}
