function login() {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    try {
        Validation.user(email, "Enter The Email");
        Validation.user(password, "Enter The Password");
        const Obj = {
            "email": email,
            "password": password
        }
        UserService.login(Obj).then(res => {
            console.log(res.data)
            let user = res.data.userData
            console.log(user)
            localStorage.setItem('user', JSON.stringify(user));
            if (res.data.message=== "login successful" && res.data.userData.status==='verified') {
                alert(res.data.message)
                window.location.href = "initialpage.html"
            }else{
                alert('not verified')
            }
        }).catch(err => {
                alert(res.data.message);
            })
    } catch (error) {
        alert(error)
    }
}