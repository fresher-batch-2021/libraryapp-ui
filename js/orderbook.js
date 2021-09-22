function loadBook(id) {
  BookService.findBookById(id)
    .then((res) => {
      console.log(res);
      let book = res;
      let content = "";
      content =
        content +
        `<img class="order-image" src="${book.image}" alt="img">
<div class="order-div2">
    <h1 class="order-h1">${book.bookName}</h1>
    <h3 class="order-h4">${book.authorName}</h3>
    <hr>
    <p class="order-p">${book.description} </p>

    <div>
        <button type="button" class="placeorder-button" onclick="orderBook('${book._id}','${book.bookName}')">PlaceOrder</button><br>

    </div>
</div>`;
      document.querySelector("#orderBook").innerHTML = content;
    })
    .catch((err) => {
      console.error(err.message)
      alert("Book Not Found");
    });
}

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
loadBook(id);

function orderBook(id) {
  let user = UserServices.userDetails();
  console.log(user)
  const bookId = id;
  BookService.findBookById(id).then(res => {
    let bookData = res
    console.log(bookData)
    let Obj = {
      user: { _id: user._id, name: user.name },
      book: { _id: bookId, bookName: bookData.bookName }
    };
    OrderService.placeOrder(Obj)
    .then(res=>{toastr.success("Successfully Ordered");
    setTimeout(()=>{
      window.location.href="initialpage.html"
    },2000)
  })
    .catch(err=>  toastr.warning(err.message))     

  }).catch(err => toastr.error("Book Does Not Exists"))

}

function sendMail() {
  $.ajax({
    type: 'POST',
    url: 'https://mandrillapp.com/api/1.0/messages/send.json',
    data: {
      'key': 'YOUR API KEY HERE',
      'message': {
        'from_email': 'libraryapp123@outlook.com',
        'to': [
            {
              'email': 'ksai4666@gmail.com',
              'name': 'RECIPIENT NAME (OPTIONAL)',
              'type': 'to'
            }
          ],
        'autotext': 'true',
        'subject': 'YOUR SUBJECT HERE!',
        'html': 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
      }
    }
   }).done(function(response) {
     console.log(response); // if you're into that sorta thing
   });
}
