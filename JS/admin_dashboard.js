document.addEventListener("DOMContentLoaded", function() {
    // Simulasi data
    let data = {
        totalPengguna: 125,
        totalBuku: 560,
        bukuDipinjam: 87,
        terlambat: 15,
        aktivitasTerbaru: [
            "User A meminjam buku 'Belajar JavaScript'",
            "User B mengembalikan buku 'Pemrograman Python'",
            "User C mendaftar sebagai pengguna baru"
        ],
        peminjamanBulan: [10, 20, 15, 30, 25, 40, 35, 50]
    };

    // Update ringkasan
    document.getElementById("totalPengguna").textContent = data.totalPengguna;
    document.getElementById("totalBuku").textContent = data.totalBuku;
    document.getElementById("bukuDipinjam").textContent = data.bukuDipinjam;
    document.getElementById("terlambat").textContent = data.terlambat;

    // Update aktivitas terbaru
    let activityList = document.getElementById("recentActivities");
    activityList.innerHTML = "";
    data.aktivitasTerbaru.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        activityList.appendChild(li);
    });

    // Grafik peminjaman (menggunakan Chart.js)
    let ctx = document.getElementById("chartPeminjaman").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu"],
            datasets: [{
                label: "Jumlah Peminjaman",
                data: data.peminjamanBulan,
                borderColor: "blue",
                borderWidth: 2
            }]
        }
    });
});

// Fungsi hapus baris dalam tabel
function hapusPeminjaman(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Fungsi logout (bisa disesuaikan dengan kebutuhan)
function logout() {
    alert("Anda telah logout.");
    window.location.href = "index.html"; // Arahkan ke halaman login
}
