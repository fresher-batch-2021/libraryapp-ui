function orderedBooks(){
    const userStr=localStorage.getItem("user");
    const user=JSON.parse(userStr);
    const userId=user.user_id
    console.log(userId)
    const url=("http://localhost:8000/order/order-details/"+userId)
    axios.get(url).then(res=>{
        let orderDetails=res.data;
        let content=""
        let i =1;
        for(let bookObj  of orderDetails){                 
            content=content+`<tr><td>${i++}</td><td>${bookObj.bookId.bookName}</td><td>${new Date(bookObj.orderDate).toJSON().substr(0,10)}</td><td></td><td>Rs:${bookObj.fine}</td></tr>`
        }
        document.querySelector("#orderedBooks").innerHTML=content;
    })
}
orderedBooks()