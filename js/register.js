function register() {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    Validation.user(name, "Enter The Name");
    Validation.email(email, "Enter The Correct Email");
    Validation.password(
      password,
      "Password should have one uppercase special character and number"
    );
    let Obj = {
      name: name,
      email: email,
      password: password,
    };
    console.log(Obj);
    UserServices.register(Obj)
      .then((res) => {
        toastr.success("Registered Successfully");
        setTimeout(()=>{
          window.location.href='login.html'
        },2000)

      })
      .catch((err) => {
        toastr.error("Unable to register");
      });
  } catch (error) {
    console.error(error.message);
    toastr.error(error);
  }
}
