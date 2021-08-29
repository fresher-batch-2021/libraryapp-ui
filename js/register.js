function register() {

    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        Validation.user(name, "Enter The Name");
        Validation.email(email, 'Enter The Correct Email');
        Validation.password(password, "Password should have one uppercase special character and number")
        let Obj = {
            "name": name,
            "email": email,
            "password": password
        }
        console.log(Obj)
        UserService.register(Obj).then(res => {
            if(res.data.message==='Registered successful'){
            alert(res.data.message);
            window.location.href = 'login.html'
            }else{
                alert(res.data.message)
            }
        }).catch(err => {
            console.log(err.res.data);
            alert("Unable to register");
        })
    } catch (error) {
        console.error(error.message)
        alert(error)

    }
}