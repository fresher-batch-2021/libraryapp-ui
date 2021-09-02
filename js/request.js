function addRequest() {
  let user = UserServices.userDetails();
  console.log(user)
  const bookName = document.querySelector("#bookName").value;
  if (bookName == null || bookName.trim() == "") {
    toastr.error("Enter the bookname");
  } else {
    let Obj = {
      user:{_id:user._id,name:user.name},
      totalRequests:[],
      bookName: bookName,
      requestedDate:new Date()
    };
    RequestService.addRequest(Obj)
      .then((res) => {
        toastr.success("added your request");
      window.location.href = "request.html";

      })
      .catch((err) => toastr.error(err.message));
  }
}
function allRequestedBooks() {
  RequestService.findAllRequests()
    .then((res) => {
      let user = UserServices.userDetails();
      console.log(user);
      let books = res;
      console.log(books)
      let i = 1;
      let content = "";
      for (let book of books) {
        let userName = book.user.name;
        console.log(userName)
        let user_id = book.totalRequests.map((e) => e).includes(user._id);
        console.log(user_id);
        let count = book.totalRequests.length;
        let requestedDate = new Date(book.requestedDate).toJSON().substr(0,10)
       
        content =
          content +
          `<tr><td>${i++}</td> <td>${
            book.bookName
          }</td> <td>${userName}</td> <td>${requestedDate}</td><td>${count}`;
        if (user_id === false) {
          console.log("hii");
          content += `<button class='add-request-button' onclick="updateRequest('${book._id}')" >Add</button>`;
        }
        content += "</td></tr>";
      }
      document.querySelector("#requestedBooks").innerHTML = content;
    })
    .catch((err) => console.error(err.message));
}
allRequestedBooks();

function updateRequest(_id) {
  let user = UserServices.userDetails();
  console.log(user);
  let Obj = {
    _id: _id,
    userid: user._id,
  };
  RequestService.addNewRequest(Obj)
    .then((res) => {
      toastr.success("Added Your Request");
      window.location.href = "request.html";
    })
    .catch((err) => toastr.error(err.message));
}
