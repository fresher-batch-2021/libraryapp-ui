function allBooks() {
    const url = ('http://localhost:8000/book/get-all-books');
    axios.post(url).then(res => {
        console.log(res.data)
        let book = res.data;
        let allBook = "";
        for (let bookObj of book) {
            console.log(bookObj.bookName);
            allBook = allBook + ` `
        }

        document.querySelector('#books').innerHTML = allBook;

    })

}
allBooks()