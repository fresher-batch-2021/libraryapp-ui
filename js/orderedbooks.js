function orderedBooks() {
  let user = UserServices.userDetails();
  OrderService.getAllOrders()
    .then((res) => {
      console.log(res.map(e=>e.user._id));
      let orderedUserId=res.map(e=>e.user._id)
      let userData=orderedUserId.includes(user._id)
    console.log(userData)
    if(userData===true){
      console.log("hi")
      let orderDetails = res;
      let content = "";
      let i = 1;
      for (let bookObj of orderDetails) {
        console.log(bookObj);
        let returnedDate =  bookObj.returnDate != null? new Date(bookObj.returnDate).toJSON().substr(0, 10): "";
        let orderedDate = new Date(bookObj.orderDate).toJSON().substr(0, 10);
        content =
          content +
          `<tr>
            <td>${i++}</td><td>${bookObj.book.bookTitle}</td>
            <td>${orderedDate}</td>
            <td>${bookObj.dueDate}</td><td>${returnedDate}</td>
            <td>Rs:${bookObj.fine}</td>
            <td>`;

        if (bookObj.returnDate == null) {
          content += `<button class='return-button' onclick="returnBook('${bookObj._id}')"  >Return</button>&nbsp;`;
        }
        if (bookObj.status !== "renewed" && bookObj.returnDate == null) {
          content += `<button class='return-button' onclick="renewBook('${bookObj._id}')">RenewBook</button>`;
        }

        content += "</td></tr>";
      }
      document.querySelector("#orderedBooks").innerHTML = content;
    }
      
    })
    .catch((err) => {
      console.error(err);
    });
}
orderedBooks();

function returnBook(obj) {
  console.log(obj)
  OrderService.returnDate(obj)
    .then((res) => {
      console.log(res)
      toastr.success("Book Returned");
      setTimeout(()=>{
        window.location.href = "initialpage.html";
      },2000)
    })
    .catch((err) => {
      toastr.error("Error Occured");
    });
}

function renewBook(Obj) {
OrderService.renewDate(Obj)
.then(res=>{toastr.success("Book Renewed");
setTimeout(()=>{
  window.location.href="ordered.html"
},2000)
}
).catch((err)=>console.log(err.message))
}
