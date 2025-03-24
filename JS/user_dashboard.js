document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const profilLink = document.getElementById("profilLink"); 
    const statusLink = document.getElementById("statusLink");
    const logoutButton = document.getElementById("logoutButton");

    // Fungsi pencarian buku
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const bookCards = document.querySelectorAll(".book-card");
        bookCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Update profile link to navigate to profile page
    profilLink.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "profil.html";
    });

    // Fungsi logout
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Anda telah logout!");
        window.location.href = "halaman_login.html";
    });

    // Fungsi untuk menangani tombol Pinjam
    const pinjamButtons = document.querySelectorAll(".pinjamButton");
    pinjamButtons.forEach(button => {
        button.addEventListener("click", function () {
            const bookTitle = button.getAttribute("data-book");
            const returnDateInput = button.parentElement.querySelector("input[type='date']");
            const returnDate = returnDateInput.value;

            if (!returnDate) {
                alert("Harap pilih tanggal pengembalian!");
                return;
            }

            // Get user profile
            const userProfile = JSON.parse(localStorage.getItem("userProfile")) || {};

            // Simpan data peminjaman ke localStorage
            const peminjaman = {
                judul: bookTitle,
                tanggalKembali: returnDate,
                status: "Dipinjam",
                peminjam: userProfile.nama || "Anonymous"
            };

            // Ambil data peminjaman yang sudah ada dari localStorage
            let peminjamanList = JSON.parse(localStorage.getItem("peminjaman")) || [];
            peminjamanList.push(peminjaman);
            localStorage.setItem("peminjaman", JSON.stringify(peminjamanList));

            // Nonaktifkan tombol Pinjam dan ubah warnanya
            button.classList.add("disabled");
            button.textContent = "Sudah Dipinjam";
            button.disabled = true;

            alert(`Buku "${bookTitle}" berhasil dipinjam. Harap dikembalikan sebelum ${returnDate}.`);
        });
    });
});