function register() {

    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    if (name == "" || name == null) {
        alert('Name Should Be Entered')
        return false;
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        alert('Invalid Email')
        return false;
    } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)) {
        alert("Password Must have uppercase and specialcharacter")
        return false;
    } else {
        window.location.href = "login.html"
    }

    let Obj = {
        "name": name,
        "email": email,
        "password": password
    }
    console.log(Obj)
    const url = "http://localhost:8000/users/addUser";
    axios.post(url, Obj).then(res => {
        alert(res.data.message);
    }).catch(err => {
        alert("Unable to register");
    })

}