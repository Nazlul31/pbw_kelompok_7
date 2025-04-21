const defaultImage = "gambar/profile.jpg"; // Gambar default

document.addEventListener("DOMContentLoaded", function() {
    const preview = document.getElementById("preview");
    const hapusGambarBtn = document.getElementById("hapus-gambar");

    // Cek apakah ada gambar yang disimpan di localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage && savedImage !== defaultImage) {
        preview.src = savedImage;
        hapusGambarBtn.style.display = "block";
    } else {
        preview.src = defaultImage;
        hapusGambarBtn.style.display = "none";
    }

    // Cek username dan email tersimpan
    if (localStorage.getItem("username")) {
        document.getElementById("username").value = localStorage.getItem("username");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
});

// Fungsi untuk mengubah gambar profil
function ubahGambar(event) {
    let reader = new FileReader();
    reader.onload = function () {
        let output = document.getElementById('preview');
        output.src = reader.result;
        document.getElementById('hapus-gambar').style.display = "block"; 
        localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Fungsi untuk menghapus gambar profil
function hapusGambar() {
    document.getElementById("preview").src = defaultImage;
    document.getElementById("hapus-gambar").style.display = "none"; 
    localStorage.removeItem("profileImage"); 
}

// Fungsi untuk menyimpan perubahan profil
function simpanPerubahan() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let profileImage = document.getElementById("preview").src;

    let usernameError = document.getElementById("username-error");
    let emailError = document.getElementById("email-error");
    let passwordError = document.getElementById("password-error");

    let isValid = true;

    // Validasi Username
    if (username === "") {
        usernameError.textContent = "Username tidak boleh kosong!";
        isValid = false;
    } else if (username.includes(" ")) {
        usernameError.textContent = "Username tidak boleh mengandung spasi!";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // Validasi Email
    if (email === "") {
        emailError.textContent = "Email tidak boleh kosong!";
        isValid = false;
    } else if (!email.endsWith("@gmail.com")) {
        emailError.textContent = "Email harus menggunakan format @gmail.com!";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validasi Password
    if (password === "") {
        passwordError.textContent = "Password tidak boleh kosong!";
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = "Password minimal 8 karakter!";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Jika semua valid, simpan ke localStorage
    if (isValid) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("profileImage", profileImage);

        document.getElementById("saved-username").innerText = username;
        document.getElementById("saved-email").innerText = email;
        document.getElementById("saved-profile-picture").src = profileImage;

        document.getElementById("profile-display").style.display = "block";

        alert("Profil berhasil disimpan!");
    }

    
}

