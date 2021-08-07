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
    }
    let Obj = {
        "email": email,
        "password": password
    }
    const url = "http://localhost:8000/users/login";
    axios.post(url, Obj).then(res => {
        console.log(res)
        let token = res.data.token;
        localStorage.setItem("LOGGED_IN_USER", token);
        alert(res.data.message);

    }).catch(err => {
        alert(res.data.message);
    })
}