function orderedBooks() {
  let user = UserService.userDetails();
  console.log(user);
  UserService.orderDetails(user.user_id)
    .then((res) => {
      console.log(res.data);
      let orderDetails = res.data;
      let content = "";
      let i = 1;
      for (let bookObj of orderDetails) {
        console.log(bookObj.bookId);
        let returnedDate =
          bookObj.returnDate != null
            ? new Date(bookObj.returnDate).toJSON().substr(0, 10)
            : "";
        let orderedDate = new Date(bookObj.orderDate).toJSON().substr(0, 10);
        content =
          content +
          `<tr>
            <td>${i++}</td><td>${bookObj.bookId.bookName}</td>
            <td>${orderedDate}</td>
            <td>${bookObj.dueDate}</td><td>${returnedDate}</td>
            <td>Rs:${bookObj.fine}</td>
            <td>`;

        if (bookObj.returnDate == null) {
          content += `<button class='return-button' onclick="returnBook('${bookObj.bookId._id}')"  >Return</button>&nbsp;`;
        }
        if (bookObj.status !== "renewed" && bookObj.returnDate == null) {
          content += `<button class='return-button' onclick="renewBook('${bookObj.bookId._id}')">RenewBook</button>`;
        }

        content += "</td></tr>";
      }
      document.querySelector("#orderedBooks").innerHTML = content;
    })
    .catch((err) => {
      console.error(err);
    });
}
orderedBooks();

function returnBook(bid) {
  let user = UserService.userDetails();
  let uid = user.user_id;
  console.log(uid);
  UserService.returnBook(bid, uid)
    .then((res) => {
      toastr.success("Book Returned");
      window.location.href = "initialpage.html";
    })
    .catch((err) => {
      toastr.error(err.response);
    });
}
function renewBook(bid) {
  let user = UserService.userDetails();
  let uid = user.user_id;
  UserService.renewBook(bid, uid)
    .then((res) => {
      toastr.success("Book Renewed");
      window.location.href = "ordered.html";
    })
    .catch((err) => {
      toastr.error(err.response);
    });
}
