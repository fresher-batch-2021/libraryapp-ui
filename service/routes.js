const routes = [
  { path: "index.html" },
  { path: "login" },
  { path: "register" },
  { path: "initialpage.html", roles: ["USER"] },
  { path: "ordered.html", roles: ["USER"] },
  { path: "orderbook.html", roles: ["USER"] },
  { path: "request.html", roles: ["USER"] },
];

function checkAccess(pageName, role) {
  let isAllowed = false;
  for (let route of routes) {
    if (route.path == pageName) {
      if (!route.roles) {
        isAllowed = true;
        break;
      } else if (route.roles.includes(role)) {
        isAllowed = true;
        break;
      }
    }
  }
  return isAllowed;
}

(function () {
  let user = JSON.parse(localStorage.getItem("user"));
console.log(user)
  let role = user != null ? user.role : null;
  console.log(user);
  console.log(role);
  let pathName = window.location.pathname.substr(1);
  console.log(pathName);
  let allowedAccess = checkAccess(pathName, role);
  console.log("Access :", allowedAccess);

  if (!allowedAccess) {
    alert(
      "You are not authorized to access this page. Redirecting to login page"
    );
    window.location.href = "login.html";
  }
})();
