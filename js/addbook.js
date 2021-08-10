function addbook(event) {
    event.preventDefault();
    const bookName = document.querySelector("#bookName").value;
    const author = document.querySelector("#author").value;
    const quantity = document.querySelector("#quantity").value;
    const price = document.querySelector("#price").value;
    const category = document.querySelector("#category").value;
    const image = document.querySelector('#file').value;
    console.log(image);

    if (bookName == "" || bookName == null) {
        alert("Enter the BookName");
        return false
    }
    else if (author == null || author == "") {
        alert("Enter the authorname");
        return false

    }
    else if (quantity == null || quantity == "") {
        alert("Enter the quantity");
        return false

    }
    else if (price == null || price == "") {
        alert("Enter the price of the book");
        return false

    }
    else if (category == null || category == "") {
        alert("Enter the category of the book");
        return false

    }
    else {
    
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
        alert(res.data))
        .catch(err => alert("invalid details"))
    }

}