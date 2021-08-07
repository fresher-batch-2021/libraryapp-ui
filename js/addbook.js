function addbook(event) {
    event.preventDefault();
    const bookName = document.querySelector("#bookName").value;
    const author = document.querySelector("#author").value;
    const quantity = document.querySelector("#quantity").value;
    const price = document.querySelector("#price").value;
    const category = document.querySelector("#category").value;
    const image = document.querySelector('#file').value;
    console.log(image);

    if (bookName == null || bookName == "") {
        alert("Enter the BookName");
    }
    else if (author == null || author == "") {
        alert("Enter the authorname");
    }
    else if (quantity == null || quantity == "") {
        alert("Enter the quantity");
    }
    else if (price == null || price == "") {
        alert("Enter the price of the book");
    }
    else if (category == null || category == "") {
        alert("Enter the category of the book");
    }
    else {
        alert("Book Added Successfully");
    }
    const details = {
        "bookName": bookName,
        "authorName": author,
        "quantity": quantity,
        "price": price,
        "category": category,
        "image": image
    }
    console.log(details);

    const url = ('http://localhost:8000/book/add-book');
    axios.post(url, details).then(res =>
        console.log(res.data))
        .catch(err => alert(res.data))

}