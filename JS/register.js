document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const roleInputs = document.querySelectorAll("input[name='role']");
    const popup = document.getElementById("popup");

    // Tambahkan elemen untuk pesan error
    const emailError = document.createElement("p");
    emailError.classList.add("error-message");
    emailInput.insertAdjacentElement("afterend", emailError);

    const passwordError = document.createElement("p");
    passwordError.classList.add("error-message");
    confirmPasswordInput.insertAdjacentElement("afterend", passwordError);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah halaman refresh
        let valid = true;

        // Reset tampilan input setiap kali submit ditekan
        emailInput.classList.remove("error");
        passwordInput.classList.remove("error");
        confirmPasswordInput.classList.remove("error");
        emailError.style.display = "none";
        passwordError.style.display = "none";

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        const selectedRole = document.querySelector("input[name='role']:checked").value;

        // Cek apakah email diakhiri dengan @gmail.com
        if (!emailValue.endsWith("@gmail.com")) {
            emailError.textContent = "Email harus menggunakan domain @gmail.com!";
            emailError.style.display = "block";
            emailInput.classList.add("error");
            valid = false;
        }

        // Cek apakah password dan konfirmasi password cocok
        if (passwordValue !== confirmPasswordValue) {
            passwordError.textContent = "Password dan Konfirmasi Password harus sama!";
            passwordError.style.display = "block";
            passwordInput.classList.add("error");
            confirmPasswordInput.classList.add("error");
            valid = false;
        }

        if (!valid) {
            return;
        }

        // Tampilkan pop-up
        popup.style.display = "flex";

        // Sembunyikan pop-up setelah 4 detik dan redirect sesuai role
        setTimeout(function () {
            popup.style.display = "none";
            if (selectedRole === "user") {
                window.location.href = "user_dashboard.html";
            } else if (selectedRole === "admin") {
                window.location.href = "dashboard_admin.html";
            }
        }, 2000);
    });
});