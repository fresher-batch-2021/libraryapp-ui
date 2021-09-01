function login() {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  Validation.user(email, "Enter The Email");
  Validation.user(password, "Enter The Password");
  const Obj = {
    email: email,
    password: password,
  };
  UserService.login(Obj)
    .then((res) => {
      console.log(res.data);
      let user = res.data.userData;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      if (res.data.message === "login successful") {
        toastr.success(res.data.message);
        window.location.href = "initialpage.html";
      } else {
        toastr.error(res.data.message);
      }
    })
    .catch((err) => {
      toastr.success(res.data.message);
    });
}
