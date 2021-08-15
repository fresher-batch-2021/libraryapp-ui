
function loadBook(id) {
    const url = ('http://localhost:8000/book/get-book-by-id/' + id)
    axios.get(url).then(res => {
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

    }).catch(err => {alert("Book Not Found") })


}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
loadBook(id);

function orderBook(id){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const userId=user.user_id
    const bookId=id
    console.log(bookId)
    let Obj={
        "userId":userId,
        "bookId":bookId        
    }
    const url=" https://libraryapp-node-api.herokuapp.com/order/place-orders/"
    axios.post(url,Obj)
    .then(res=>{alert("Ordered Successfully"),window.location.href="initialpage.html"} )
    .catch(err=>{alert("Can't able to order book")})
    
}