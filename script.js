// ===== Book Constructor =====
function Book(title, author, pages, read = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Add a prototype method to toggle read status
Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

// ===== Library Storage =====
const myLibrary = [];

// ===== Add Book to Library =====
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

// ===== Display Books on Page =====
function displayBooks() {
    const libraryDisplay = document.getElementById('libraryDisplay');
    libraryDisplay.innerHTML = '';

    if (myLibrary.length === 0) {
        libraryDisplay.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h2>Your library is empty</h2>
                <p>Click "New Book" to add your first book!</p>
            </div>
        `;
        return;
    }

    myLibrary.forEach(book => {
        const bookCard = createBookCard(book);
        libraryDisplay.appendChild(bookCard);
    });
}

// ===== Create Book Card Element =====
function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.bookId = book.id;

    const readStatusClass = book.read ? 'read' : 'unread';
    const readStatusText = book.read ? 'Read' : 'Not Read';
    const toggleButtonText = book.read ? 'Mark as Unread' : 'Mark as Read';
    const toggleButtonClass = book.read ? 'btn-toggle' : 'btn-toggle unread';

    card.innerHTML = `
        <h3>${escapeHtml(book.title)}</h3>
        <div class="book-info">
            <p><strong>Author:</strong> ${escapeHtml(book.author)}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <div class="read-status ${readStatusClass}">${readStatusText}</div>
        </div>
        <div class="book-actions">
            <button class="btn ${toggleButtonClass}" data-action="toggle" data-book-id="${book.id}">
                ${toggleButtonText}
            </button>
            <button class="btn btn-danger" data-action="remove" data-book-id="${book.id}">
                Remove
            </button>
        </div>
    `;

    // Add event listeners to action buttons
    card.querySelectorAll('button[data-action]').forEach(btn => {
        btn.addEventListener('click', handleBookAction);
    });

    return card;
}

// ===== Handle Book Actions =====
function handleBookAction(e) {
    const action = e.target.dataset.action;
    const bookId = e.target.dataset.bookId;

    if (action === 'remove') {
        removeBook(bookId);
    } else if (action === 'toggle') {
        toggleReadStatus(bookId);
    }
}

// ===== Remove Book from Library =====
function removeBook(bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    if (bookIndex > -1) {
        myLibrary.splice(bookIndex, 1);
        displayBooks();
    }
}

// ===== Toggle Read Status =====
function toggleReadStatus(bookId) {
    const book = myLibrary.find(book => book.id === bookId);
    if (book) {
        book.toggleRead();
        displayBooks();
    }
}

// ===== Utility: Escape HTML to prevent XSS =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== Dialog and Form Handling =====
const newBookBtn = document.getElementById('newBookBtn');
const addBookDialog = document.getElementById('addBookDialog');
const bookForm = document.getElementById('bookForm');
const closeDialogBtn = document.getElementById('closeDialog');

newBookBtn.addEventListener('click', () => {
    bookForm.reset();
    addBookDialog.showModal();
});

closeDialogBtn.addEventListener('click', () => {
    addBookDialog.close();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = parseInt(document.getElementById('pages').value);
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    addBookDialog.close();
    bookForm.reset();
});

// Close dialog when clicking backdrop
addBookDialog.addEventListener('click', (e) => {
    if (e.target === addBookDialog) {
        addBookDialog.close();
    }
});

// ===== Initialize Library with Sample Books =====
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, true);
