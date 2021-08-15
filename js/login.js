function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (email == "" || email == null) {
        alert("Please Enter The Email")
        return false;

    } else if (password == "" || password == null) {
        alert("Enter The Password")
        return false;
    }else{
    const Obj = {
        "email": email,
        "password": password
    }
    const url = "https://libraryapp-node-api.herokuapp.com/users/login";
    axios.post(url, Obj).then(res => {
        console.log(res.data)
        let user=res.data.userData
        localStorage.setItem('user',JSON.stringify(user));
        if(res.data.message==="login successful"){
            window.location.href="initialpage.html"
        }
        alert(res.data.message)})
        .catch(err => {
        alert(res.data.message);
    })
}
}