function allBooks() {
    UserService.allBooks().then(res => {
        console.log(res.data)
        let book = res.data;
        let allBook = "";
        for (let bookObj of book) {
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

function search(){
    const name = document.querySelector("#bookName").value;
    if(name==null||name.trim()==''){
        alert('Enter The Book Name')
    }else{
        UserService.allBooks()
        .then(res=>{
            let books=res.data
            let searchBook=books.filter(obj=>obj.bookName==name||obj.authorName==name.toLowerCase().indexOf(name.toLowerCase()) != -1)
            console.log(searchBook)
            let allBook = "";
            for (let bookObj of searchBook) {
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
        .catch(err=>console.error(err.message))
    }

}