let firstCheck = localStorage.getItem("checkLogin");
  if (firstCheck && firstCheck !== "false") {
    window.location.href = "index.html";
  }

  let form = document.getElementById("loginForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let loginEmail = form.email.value.trim();
    let loginPassword = form.password.value.trim();
    console.log(loginEmail, loginPassword);

    let userFromLocalStorage = localStorage.getItem("user");

    if (!userFromLocalStorage) {
      alert("Chưa có tài khoản. Vui lòng đăng ký.");
      return;
    }

    let userRegister = JSON.parse(userFromLocalStorage);
    let checkLogin = false;

    if (
      userRegister.email === loginEmail &&
      userRegister.password === loginPassword
    ) {
      checkLogin = true;
      localStorage.setItem("checkLogin", loginEmail); // hoặc "true"
window.location.href = "index.html";
    } else {
      alert("Sai email hoặc mật khẩu, vui lòng nhập lại");
      checkLogin = false;
      localStorage.setItem("checkLogin", "false");
    }

    console.log("checkLogin:", checkLogin);
  });