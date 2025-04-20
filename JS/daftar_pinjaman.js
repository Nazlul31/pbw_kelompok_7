document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi data awal kalau Local Storage kosong
    if (!localStorage.getItem("dataPeminjaman")) {
        let dataAwal = [
            {
                nama: "Ahmad",
                buku: "Matematika Dasar",
                tanggalPinjam: "2025-03-20",
                tanggalKembali: "2025-04-20",
                status: "Dipinjam"
            },
            {
                nama: "Siti",
                buku: "Sejarah Dunia",
                tanggalPinjam: "2025-03-15",
                tanggalKembali: "2025-04-15",
                status: "Dikembalikan"
            }
        ];
        localStorage.setItem("dataPeminjaman", JSON.stringify(dataAwal));
    }

    // Tampilkan data ke tabel
    tampilkanPeminjaman();

    // Tambah data saat tombol diklik
    document.querySelector(".add").addEventListener("click", function () {
        let nama = prompt("Masukkan Nama Peminjam:");
        if (!nama) return;

        let buku = prompt("Masukkan Judul Buku:");
        if (!buku) return;

        let tanggalPinjam = prompt("Masukkan Tanggal Pinjam (YYYY-MM-DD):");
        if (!tanggalPinjam) return;

        let tanggalKembali = prompt("Masukkan Tanggal Kembali (YYYY-MM-DD):");
        if (!tanggalKembali) return;

        let status = prompt("Masukkan Status (Dipinjam / Dikembalikan):", "Dipinjam");
        if (!status) status = "Dipinjam";

        let data = JSON.parse(localStorage.getItem("dataPeminjaman"));
        data.push({ nama, buku, tanggalPinjam, tanggalKembali, status });
        localStorage.setItem("dataPeminjaman", JSON.stringify(data));

        tampilkanPeminjaman();
    });
});

// Tampilkan data peminjaman ke tabel
function tampilkanPeminjaman() {
    let data = JSON.parse(localStorage.getItem("dataPeminjaman"));
    let tbody = document.querySelector("#loanTable tbody");
    tbody.innerHTML = "";

    data.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.buku}</td>
            <td>${item.tanggalPinjam}</td>
            <td>${item.tanggalKembali}</td>
            <td>${item.status}</td>
            <td>
                <button class="delete-btn" onclick="hapusPeminjaman(${index})">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Hapus peminjaman
function hapusPeminjaman(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        let data = JSON.parse(localStorage.getItem("dataPeminjaman"));
        data.splice(index, 1);
        localStorage.setItem("dataPeminjaman", JSON.stringify(data));
        tampilkanPeminjaman();
    }
}

// Logout
function logout() {
    alert("Anda telah logout.");
    window.location.href = "halaman_login.html";
}
