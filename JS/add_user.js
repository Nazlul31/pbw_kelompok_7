document.getElementById("addUserForm").addEventListener("submit", function(event) {
    let username = document.getElementById("newUsername").value.trim();
    let email = document.getElementById("newEmail").value.trim();
    
    let usernameError = document.getElementById("username-error");
    let emailError = document.getElementById("email-error");
    
    let valid = true;

    // Reset pesan error sebelum validasi
    usernameError.innerText = "";
    emailError.innerText = "";

    // **Validasi Username**
    if (username === "") {
        usernameError.innerText = "Username tidak boleh kosong!";
        valid = false;
    } else if (username.includes(" ")) {
        usernameError.innerText = "Username tidak boleh mengandung spasi!";
        valid = false;
    } else {
        usernameError.innerText = ""; // Hapus error jika valid
    }

    // **Validasi Email**
    if (email === "") {
        emailError.innerText = "Email tidak boleh kosong!";
        valid = false;
    } else if (email.includes(" ")) {
        emailError.innerText = "Email tidak boleh mengandung spasi!";
        valid = false;
    } else if (!email.endsWith("@gmail.com")) {
        emailError.innerText = "Email harus mengandung @gmail.com!";
        valid = false;
    } else {
        emailError.innerText = ""; // Hapus error jika valid
    }

    // Jika ada error, hentikan pengiriman form
    if (!valid) {
        event.preventDefault();
    }

    if (valid) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let newUser = {
            username: username,
            email: email,
            role: document.getElementById("newRole").value
        };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Pengguna berhasil ditambahkan!");
    }

});

