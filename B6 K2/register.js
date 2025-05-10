let form = document.getElementById("registerForm");
  console.log(form);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let fullname = form.fullname.value.trim();
    let email = form.email.value.trim();
    let password = form.password.value.trim();
    let user = {
      fullname: fullname,
      email: email,
      password: password,
    };

    let userString = JSON.stringify(user);
    localStorage.setItem("user", user);
    window.location.href = "Login.html";
  });