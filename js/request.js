function addRequest(){
    let user = UserService.userDetails();
    let userId = user.user_id
    const bookName=document.querySelector('#bookName').value;
    console.log(userId)
    if(bookName==null||bookName.trim()==''){
        alert('Enter the bookname')
    }else{
        let Obj={
            "count":userId,
            "bookName":bookName
        }
      UserService.addRequest(Obj)
      .then(res=>{console.log(res.data),alert(res.data)})
      .catch(err=>console.error(err.message))
    }

}
function allRequestedBooks(){
    
    UserService.getRequestedBooks()
    .then(res=>{ console.log(res.data);
        let user=UserService.userDetails();
    console.log(user)
        let books=res.data
        let i =1;
        let content='';
        for(let book of books){
            console.log(book)
            let userName=book.count.map(e=>e.name)
            console.log(userName)
            let user_id=book.count.map(e=>e._id)
            console.log(user_id)
            let user=book.count.length
            console.log(user)
            let requestedDate =  new Date(book.requestedDate).toJSON().substr(0, 10);
            content=content+`<tr><td>${i++}</td> <td>${book.bookName}</td> <td>${userName}</td> <td>${requestedDate}</td><td>${user}`;
            if(user_id===user.user_id){
                content+=`<button class='add-request-button' onclick="updateRequest('${book._id}')" >Add</button>`;
            }
            content+='</td></tr>';
        }
        document.querySelector('#requestedBooks').innerHTML=content
    })
    .catch(err=>console.error(err.message))
}
allRequestedBooks()

function updateRequest(_id){
    let user=UserService.userDetails();
    console.log(user)
    let Obj={
        "_id":_id,
        "user_id":user.user_id
    }
    UserService.updateBookCount(Obj).then(res=>{console.log(res.data);window.location.href='request.html'}).catch(err=>alert(err.message))

}
