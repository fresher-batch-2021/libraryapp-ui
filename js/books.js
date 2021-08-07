function books() {

    const url = ('http://localhost:8000/book/get-all-books');
    axios.post(url).then(res => {
        console.log(res.data)
        let book = res.data
        let allBook = "";
        let i = 1;
        for (let bookObj of book) {
            allBook = allBook + `<tr><td>${i++}</td><td>${bookObj.bookName}</td><td>${bookObj.authorName}</td><td>${bookObj.category}</td><td>Rs.${bookObj.price}</td><td>${bookObj.quantity}</td></tr>`;
        }
        console.log(allBook);
        document.querySelector("#book").innerHTML = allBook;
    })
}
books();
