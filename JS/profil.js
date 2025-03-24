document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    // Fungsi logout
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Anda telah logout!");
        window.location.href = "halaman_login.html"; // Redirect ke halaman login
    });
});
    // Fungsi logout
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Anda telah logout!");
        window.location.href = "halaman_login.html";
    });
