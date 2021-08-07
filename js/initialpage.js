function allBooks() {
    const url = ('http://localhost:8000/book/get-all-books');
    axios.post(url).then(res => {
        console.log(res.data)
        let book = res.data;
        let allBook = "";
        for (let bookObj of book) {
            console.log(bookObj.bookName);
            allBook = allBook + `
            <div class="card">

    <h1 class="initial-page-h1">${bookObj.bookName} </h1>
    <h4 class="initial-page-h4">${bookObj.authorName}</h4>
    <a href="order.html">
    <img class='initial-page-img' src="./images/${bookObj.image}" alt="image not found"/>
</a> 
</div>
`
        }

        document.querySelector('#books').innerHTML = allBook;

    })

}
allBooks()