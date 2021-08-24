function allBooks() {
    UserService.allBooks().then(res => {
        console.log(res.data)
        let book = res.data;
        let allBook = "";
        for (let bookObj of book) {
            console.log(bookObj.bookName);
            allBook = allBook + `
            <div class="card">

    <h1 class="initial-page-h1">${bookObj.bookName} </h1>
    <h4 class="initial-page-h4">${bookObj.authorName}</h4>
    <a href="orderbook.html?id=${bookObj._id}">
    <img class='initial-page-img' src="./images/${bookObj.image}" alt="image not found"/>
</a> 
</div>
`
        }

        document.querySelector('#books').innerHTML = allBook;

    }).catch(err => {
        console.error(err);
    })

}
allBooks()