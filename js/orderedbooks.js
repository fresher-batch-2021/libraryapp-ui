function orderedBooks(){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const userId=user.user_id
    console.log(userId)
    const url=(" https://libraryapp-node-api.herokuapp.com/order/order-details/"+userId)
    axios.get(url).then(res=>{
        console.log(res.data)
        let orderDetails=res.data;
        let content=""
        let i =1;
        for(let bookObj  of orderDetails){    
            console.log(bookObj.bookId)             
            content=content+`<tr><td>${i++}</td><td>${bookObj.bookId.bookName}</td><td>${new Date(bookObj.orderDate).toJSON().substr(0,10)}</td><td>${bookObj.dueDate}</td><td>Rs:${bookObj.fine}</td><td><button onclick="returnBook('${bookObj.bookId._id}')"  >Return</button></td></tr>`
        }
        document.querySelector("#orderedBooks").innerHTML=content;
    }).catch(err=>{
        console.log(err.res.data);
    })
}
orderedBooks()

function returnBook(bid){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const uid=user.user_id
    console.log(uid)
    const url=`https://libraryapp-node-api.herokuapp.com//order/return-book/${uid}/${bid}`
    axios.patch(url).then(res=>console.log(res)).catch(err=>{console.log(err.response)})

}