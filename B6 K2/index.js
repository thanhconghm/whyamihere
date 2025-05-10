function dangXuat() {
    check = false;
    localStorage.setItem("checkLogn", false);
    window.location.href = "login.html";

}

function checkLogin(){
    check = localStorage.getItem("checkLogin");
    console.log(check);
    if (check === false) {
        window.location.href = "login.html"
    }
}
checkLogin();
