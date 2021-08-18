function orderedBooks(){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const userId=user.user_id
    console.log(userId)
    UserService.orderDetails(userId).then(res=>{
        console.log(res.data)
        let orderDetails=res.data;
        let content=""
        let i =1;
        for(let bookObj  of orderDetails){    
            console.log(bookObj.bookId)           
            content=content+`<tr><td>${i++}</td><td>${bookObj.bookId.bookName}</td><td>${new Date(bookObj.orderDate).toJSON().substr(0,10)}</td><td>${bookObj.dueDate}</td><td>${bookObj.returnDate}</td><td>Rs:${bookObj.fine}</td><td><button class='return-button' onclick="returnBook('${bookObj.bookId._id}')"  >Return</button></td></tr>`
        }
        document.querySelector("#orderedBooks").innerHTML=content;
    }).catch(err=>{
        console.error(err);
    })
}
orderedBooks()

function returnBook(bid){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const uid=user.user_id
    console.log(uid)
    UserService.returnBook(bid,uid).then(res=>{alert(res.data)},window.location.href="initialpage.html").catch(err=>{console.log(err.response)})

}