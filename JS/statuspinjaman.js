document.addEventListener("DOMContentLoaded", function () {
    const statusList = document.querySelector(".status-list");

    // Ambil data peminjaman dari localStorage
    const peminjamanList = JSON.parse(localStorage.getItem("peminjaman")) || [];

    // Tampilkan data peminjaman
    if (peminjamanList.length === 0) {
        statusList.innerHTML = "<p>Tidak ada data peminjaman.</p>";
    } else {
        peminjamanList.forEach(peminjaman => {
            const statusItem = document.createElement("div");
            statusItem.classList.add("status-item");

            statusItem.innerHTML = `
                <p><strong>${peminjaman.judul}</strong></p>
                <p>Peminjam: ${peminjaman.peminjam}</p>
                <p>Status: ${peminjaman.status}</p>
                <p>Tanggal Kembali: ${peminjaman.tanggalKembali}</p>
            `;

            statusList.appendChild(statusItem);
        });
    }
});

    // Fungsi logout
    logoutButton.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Anda telah logout!");
        window.location.href = "halaman_login.html";
    });