
function loadBook(id) {
    UserService.loadBook(id).then(res => {
        console.log(res.data)
        let book = res.data;
        let content = "";
        content = content + `<img src="./images/${book.image}" alt="img">
<div class="order-div2">
    <h1 class="order-h1">${book.bookName}</h1>
    <h3 class="order-h4">${book.authorName}</h3>
    <hr>
    <p class="order-p">${book.description} </p>

    <div>
        <button type="button" class="placeorder-button" onclick="orderBook('${book._id}')">PlaceOrder</button><br>

    </div>
</div>`;
        document.querySelector("#orderBook").innerHTML = content;

    }).catch(err => { alert("Book Not Found") })


}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
loadBook(id);

function orderBook(id) {
    let user = UserService.userDetails();
    let userId = user.user_id
    const bookId = id
    console.log(bookId)
    let Obj = {
        "userId": userId,
        "bookId": bookId
    }
    UserService.orderBook(Obj)
        .then(res => { console.log(res.data), alert(res.data.message),window.location.href = "initialpage.html" })
        .catch(err => {
            console.error(err)
            alert("Already ordered 3 books")
        })

}