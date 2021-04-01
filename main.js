let bookIds = [];
let library = [];

function Book(title, author, genre, condition, pageCount, read) {
    this.id = returnNewIndex(bookIds);
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.condition = condition;
    this.pageCount = pageCount;
    this.read = read;
    library.push(this);
    bookIds.push(parseInt([this.id]));
}

book1 = new Book (
    "The Saharan",
    "Shteve Snowbadiah",
    "Suspense and Thrillers",
    "Good",
    327,
    "Yes"
)

book2 = new Book (
    "Romanov and the Wild Goose Chase",
    "Steve Busheemi",
    "Memoir",
    "Very Good",
    512,
    "Yes"
)

function returnNewIndex(bookIds) {
    if (bookIds.length == 0) {
        return 0;
    } else if (bookIds.length == 1) {
        return 1;
    } else {
        let last = bookIds[bookIds.length - 1];
        let newIndex = last + 1;
        return newIndex;
    }
}



/*
function displayBooks(libraryLength) {
    for (let i = 0; i < libraryLength; i++) {
        alert(library[i].title);
        console.log(library[i].title);
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function resetTable() {
    $("#tbody").empty();
}
*/

function removeBook(id) {
    for (var i=0; i < bookIds.length; i++) {
        if (bookIds[i] == id) {
            bookIds.splice(i, 1);
            library.splice(i, 1)
        }
    }
    var button = document.getElementById("btnDelete" + id);
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function toggleRead(id) {
    //below line isn't working properly
    var index = bookIds.indexOf(id);
    var book = library[index];
    var button = document.getElementById("btnToggleRead" + id);
    if (book.read == "Yes") {
        book.read = "No"
        button.textContent = "Read: " + book["read"];
    } else {
        book.read = "Yes"
    }
    button.textContent = "Read: " + book["read"];
}

function addRowHTML(book) {
    let row = table.insertRow(1);

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);

    cell1.innerHTML = book["title"];
    cell2.innerHTML = book["author"];
    cell3.innerHTML = book["genre"];
    cell4.innerHTML = book["condition"];
    cell5.innerHTML = book["pageCount"];

    let btnToggleReadId = "btnToggleRead" + book["id"];
    cell6.innerHTML = "<button id=" + btnToggleReadId + " onClick=\"toggleRead("+book["id"]+")\">Read: " + book["read"] + "</button>";

    let btnDeleteId = "btnDelete" + book["id"];
    cell7.innerHTML = "<button id=" + btnDeleteId + " onClick=\"removeBook("+book["id"]+")\">Delete</button>";
}

const addToLibrary = (ev)=> {
    ev.preventDefault();

    var readRadio = document.getElementsByName('read');
    var read = "Yes"

    if (readRadio[1].checked) {
        read = "No"
    }

    let book = new Book (
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('genre').value,
        document.getElementById('condition').value,
        document.getElementById('pageCount').value,
        read
    )
    document.querySelector('form').reset();

    localStorage.setItem("Library", JSON.stringify(library));

    addRowHTML(book);
}

function showForm() {
    document.getElementById('formContainer').style.display = 'block';
}

function closeForm() {
    document.getElementById('formContainer').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnSubmit').addEventListener('click', addToLibrary)
})

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnAddBook').addEventListener('click', showForm)
})

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnCancel').addEventListener('click', closeForm)
})



/*

function toggleForm() {
    let form = document.getElementById('formContainer')
    if (form.style.display == 'block') {
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}

function getBookIds(library) {
    library.forEach(function(book) {
        bookIds.push(book['id'])
    })
    return bookIds
}

function expandTable() {
    let table = document.getElementById("table");
    bookIds = getBookIds(library).pop;
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let bookId = book["id"];
        if (bookIds.includes(bookId)) {
            continue;
        } else {
            let row = table.insertRow(1);

            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
    
            cell1.innerHTML = book["title"];
            cell2.innerHTML = book["author"];
            cell3.innerHTML = book["genre"];
            cell5.innerHTML = book["condition"];
            cell4.innerHTML = book["pageCount"];
        }
    }
}

function createTable() {
    let table = document.getElementById("table");
    for (let i = 0; i < library.length; i++) {
        let book = library[i];
        let row = table.insertRow(1);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = book["title"];
        cell2.innerHTML = book["author"];
        cell3.innerHTML = book["genre"];
        cell5.innerHTML = book["condition"];
        cell4.innerHTML = book["pageCount"];
    }
}
*/


/*

let rows = [{
    title: library[0].title,
    author: library[0].author,
    genre: library[0].genre,
    pageCount: library[0].pageCount,
    condition: library[0].condition
}, {
    title: library[1].title,
    author: library[1].author,
    genre: library[1].genre,
    pageCount: library[1].pageCount,
    condition: library[1].condition
}];

let html = "<table border='1|1>";
for (var i=0; i<rows.length; i++) {
    html+="<tr>";
    html+="<td>" + rows[i].title + "</td>";
    html+="<td>" + rows[i].author + "</td>";
    html+="<td>" + rows[i].genre + "</td>";
    html+="<td>" + rows[i].pageCount + "</td>";
    html+="<td>" + rows[i].condition + "</td>";
    html+="</tr>";
}
html+="</table>";
document.getElementById("tableHolder").innerHTML = html;
*/