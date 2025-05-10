
 document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn reload trang

    // Lấy giá trị
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const verifyPassword = document.getElementById("verifyPassword").value;

    // Reset lỗi
    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("verifyPasswordError").textContent = "";

    let hasError = false;

    // Validate username
    if (username.length < 6 || username.length > 18) {
      document.getElementById("usernameError").textContent =
        "Username phải từ 6 đến 18 ký tự.";
      hasError = true;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Email không hợp lệ.";
      hasError = true;
    }

    // Validate password
    if (password.length < 8 || password.length > 20) {
      document.getElementById("passwordError").textContent =
        "Password phải từ 8 đến 20 ký tự.";
      hasError = true;
    }

    // Validate verifyPassword
    if (verifyPassword !== password) {
      document.getElementById("verifyPasswordError").textContent =
        "Mật khẩu xác nhận không khớp.";
      hasError = true;
    }

    // Nếu không có lỗi, có thể gửi dữ liệu hoặc hiển thị thông báo thành công
    if (!hasError) {
      alert("Đăng nhập thành công!");
      // Hoặc gửi dữ liệu lên server tại đây
    }
  });

