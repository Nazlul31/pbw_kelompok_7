document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let emailInput = document.getElementById("email");
        let email = emailInput.value.trim();
        let passwordInput = document.getElementById("password");
        let role = document.querySelector('input[name="role"]:checked').value;
        let errorText = document.createElement("p"); // Buat elemen untuk pesan error
        errorText.classList.add("error-text");

        // Cek apakah elemen error sudah ada, jika belum tambahkan
        let existingError = emailInput.nextElementSibling;
        if (existingError && existingError.classList.contains("error-text")) {
            existingError.remove();
        }

        // Reset tampilan error
        emailInput.classList.remove("error");

        // Validasi email harus menggunakan @gmail.com
        if (!email.endsWith("@gmail.com")) {
            emailInput.classList.add("error");
            errorText.textContent = "Harus menggunakan domain @gmail.com";
            emailInput.parentNode.appendChild(errorText); // Tambahkan error setelah input
            return;
        }

        // Redirect sesuai role jika tidak ada error
        if (role === "user") {
            window.location.href = "user_dashboard.html";
        } else if (role === "admin") {
            window.location.href = "dashboard_admin.html";
        }
    });

    // Hapus error saat pengguna mulai mengetik ulang email
    document.getElementById("email").addEventListener("input", function () {
        this.classList.remove("error");
        let existingError = this.nextElementSibling;
        if (existingError && existingError.classList.contains("error-text")) {
            existingError.remove();
        }
    });
});