function addRequest(){
    let user = UserService.userDetails();
    let userId = user.user_id
    const bookName=document.querySelector('#bookName').value;
    console.log(userId)
    if(bookName==null||bookName.trim()==''){
        alert('Enter the bookname')
    }else{
        let Obj={
            "userId":userId,
            "bookName":bookName
        }
      UserService.addRequest(Obj).then(res=>console.log(res.data)).catch(err=>console.error(err.message))
    }

}
function allRequestedBooks(){
    UserService.getRequestedBooks()
    .then(res=>{
        let book=res.data
        console.log(book)
        $("#template").tmpl(book).appendTo("#table")
    })
    .catch(err=>console.error(err.message))
}
allRequestedBooks()