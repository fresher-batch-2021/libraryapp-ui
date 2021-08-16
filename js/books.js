function books() {

    const url = ('https://libraryapp-node-api.herokuapp.com/book/get-all-books');
    axios.post(url).then(res => {
        console.log(res.data)
        let book = res.data
        console.table(book);
        let activeBooks = book.filter(obj=> obj.active);
        console.table(activeBooks);
        let allBook = "";
        let i = 1;
        for (let bookObj of activeBooks) {
            
                allBook = allBook + `<tr><td>${i++}</td><td>${bookObj.bookName}</td><td>${bookObj.authorName}</td><td>${bookObj.category}</td><td>Rs.${bookObj.price}</td><td>${bookObj.quantity}</td></tr>`;

            
        }
        console.log(allBook);
        document.querySelector("#book").innerHTML = allBook;
    }).catch(err=>{
        console.log(err.res.data);
    })
}
books();
