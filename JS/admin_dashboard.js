document.addEventListener("DOMContentLoaded", function () {
    // Cek Local Storage, kalau belum ada, buat data awal
    if (!localStorage.getItem("aktivitasTerbaru")) {
        let dataAwal = [
            "User A meminjam buku 'Belajar JavaScript'",
            "User B mengembalikan buku 'Pemrograman Python'",
            "User C mendaftar sebagai pengguna baru"
        ];
        localStorage.setItem("aktivitasTerbaru", JSON.stringify(dataAwal));
    }

    // Tampilkan aktivitas
    tampilkanAktivitas();

    // Grafik peminjaman contoh
    let ctx = document.getElementById("chartPeminjaman").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu"],
            datasets: [{
                label: "Jumlah Peminjaman",
                data: [10, 20, 15, 30, 25, 40, 35, 50],
                borderColor: "blue",
                borderWidth: 2
            }]
        }
    });

    // Tampilkan list aktivitas dari localStorage
    function tampilkanAktivitas() {
        let activityList = document.getElementById("recentActivities");
        activityList.innerHTML = "";

        let aktivitas = JSON.parse(localStorage.getItem("aktivitasTerbaru"));

        aktivitas.forEach((item, index) => {
            let li = document.createElement("li");
            li.innerHTML = `
                ${item}
                <button onclick="editAktivitas(${index})">Edit</button>
                <button onclick="hapusAktivitas(${index})">Hapus</button>
            `;
            activityList.appendChild(li);
        });
    }

    // Tambah aktivitas
    window.tambahAktivitas = function () {
        let input = document.getElementById("inputAktivitas");
        if (input.value.trim() !== "") {
            let aktivitas = JSON.parse(localStorage.getItem("aktivitasTerbaru"));
            aktivitas.push(input.value.trim());
            localStorage.setItem("aktivitasTerbaru", JSON.stringify(aktivitas));
            tampilkanAktivitas();
            input.value = "";
        } else {
            alert("Masukkan aktivitas terlebih dahulu.");
        }
    }

    // Hapus aktivitas
    window.hapusAktivitas = function (index) {
        let aktivitas = JSON.parse(localStorage.getItem("aktivitasTerbaru"));
        aktivitas.splice(index, 1);
        localStorage.setItem("aktivitasTerbaru", JSON.stringify(aktivitas));
        tampilkanAktivitas();
    }

    // Edit aktivitas
    window.editAktivitas = function (index) {
        let aktivitas = JSON.parse(localStorage.getItem("aktivitasTerbaru"));
        let baru = prompt("Edit aktivitas:", aktivitas[index]);
        if (baru !== null && baru.trim() !== "") {
            aktivitas[index] = baru.trim();
            localStorage.setItem("aktivitasTerbaru", JSON.stringify(aktivitas));
            tampilkanAktivitas();
        }
    }
});

// Fungsi logout
function logout() {
    alert("Anda telah logout.");
    window.location.href = "index.html";
}
