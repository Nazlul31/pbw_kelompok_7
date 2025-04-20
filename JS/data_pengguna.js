document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi data awal kalau Local Storage kosong
    if (!localStorage.getItem("dataPengguna")) {
        let dataAwal = [
            {
                avatar: "avatar1.png",
                username: "admin",
                email: "admin@example.com",
                nama: "Administrator"
            },
            {
                avatar: "avatar2.png",
                username: "user",
                email: "user@example.com",
                nama: "User Biasa"
            }
        ];
        localStorage.setItem("dataPengguna", JSON.stringify(dataAwal));
    }

    // Tampilkan data ke tabel
    tampilkanData();

    // Tambah data saat tombol diklik
    document.querySelector(".add").addEventListener("click", function () {
        let username = prompt("Masukkan Username:");
        if (!username) return;

        let email = prompt("Masukkan Email:");
        if (!email) return;

        let nama = prompt("Masukkan Nama:");
        if (!nama) return;

        let avatar = prompt("Masukkan URL gambar avatar (contoh: avatar3.png):", "avatar3.png");
        if (!avatar) avatar = "avatar-default.png";

        let data = JSON.parse(localStorage.getItem("dataPengguna"));
        data.push({ avatar, username, email, nama });
        localStorage.setItem("dataPengguna", JSON.stringify(data));

        tampilkanData();
    });
});

// Tampilkan data pengguna di tabel
function tampilkanData() {
    let data = JSON.parse(localStorage.getItem("dataPengguna"));
    let tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    data.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.avatar}" class="avatar" alt="Avatar"></td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.nama}</td>
            <td>
                <button class="delete-btn" onclick="hapusUser(${index})">Hapus</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Hapus user dari tabel & Local Storage
function hapusUser(index) {
    if (confirm("Yakin ingin menghapus data ini?")) {
        let data = JSON.parse(localStorage.getItem("dataPengguna"));
        data.splice(index, 1);
        localStorage.setItem("dataPengguna", JSON.stringify(data));
        tampilkanData();
    }
}

// Logout
function logout() {
    alert("Anda telah logout.");
    window.location.href = "halaman_login.html";
}
