function addRequest(){
    let user = UserService.userDetails();
    let userId = user.user_id
    const bookName=document.querySelector('#bookName').value;
    console.log(userId)
    if(bookName==null||bookName.trim()==''){
        alert('Enter the bookname')
    }else{
        let Obj={
            "requestedUsers":userId,
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
            let userName=book.requestedUsers.map(e=>e.name)
            let user_id=book.requestedUsers.map(e=>e._id).includes(user.user_id)
            console.log(user_id)
            let count=book.requestedUsers.length
            let requestedDate =  new Date(book.requestedDate).toJSON().substr(0, 10);
            content=content+`<tr><td>${i++}</td> <td>${book.bookName}</td> <td>${userName}</td> <td>${requestedDate}</td><td>${count}`;
            if(user_id===false){
                console.log('hii')
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
    UserService.updateBookCount(Obj).then(res=>{alert("Added Your Request");window.location.href='request.html'}).catch(err=>alert(err.message))

}
