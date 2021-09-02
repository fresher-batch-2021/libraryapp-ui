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
  UserServices.login(email,password)
    .then((res) => {
    
      console.log(res);
      let user = res;
      console.log(user);
      if(user){
      localStorage.setItem("user", JSON.stringify(user));
      
      toastr.success("Login Success");
        setTimeout( ()=>{ 
          
          window.location.href = "initialpage.html";
      },2000);
        
      } else {
        toastr.error("Invalid Login Credentials");
      }
    })
    .catch((err) => {
      console.log(err);
      toastr.error("Invalid Login Credentials");
    });
}
