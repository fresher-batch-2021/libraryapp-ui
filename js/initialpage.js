function allBooks() {
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    console.log(user)
    const url = ('https://libraryapp-node-api.herokuapp.com/book/get-all-books?status=Active');
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
    <a href="orderbook.html?id=${bookObj._id}">
    <img class='initial-page-img' src="./images/${bookObj.image}" alt="image not found"/>
</a> 
</div>
`
        }

        document.querySelector('#books').innerHTML = allBook;

    })

}
allBooks()