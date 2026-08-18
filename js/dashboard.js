```javascript
// ============================================
// SISTEM DATABASE ALUMNI HAMASY
// dashboard.js
// ============================================

document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // CEK LOGIN
    // ===============================

    if (localStorage.getItem("login") !== "true") {
        window.location.href = "index.html";
        return;
    }

    // ===============================
    // TAMPILKAN NAMA ADMIN
    // ===============================

    const adminName = localStorage.getItem("username") || "Admin";

    document.getElementById("adminName").textContent = adminName;

    // ===============================
    // DATA SEMENTARA
    // ===============================

    let alumni = [

        {
            nia: "A001",
            nama: "Ahmad Fauzi",
            jk: "Laki-laki",
            ttl: "Bandung, 10 Januari 2000",
            angkatan: "2018"
        },

        {
            nia: "A002",
            nama: "Siti Nurhaliza",
            jk: "Perempuan",
            ttl: "Jakarta, 15 Mei 2001",
            angkatan: "2019"
        }

    ];

    tampilData(alumni);

    // ===============================
    // SEARCH
    // ===============================

    document.getElementById("search").addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const hasil = alumni.filter(item =>

            item.nama.toLowerCase().includes(keyword) ||

            item.nia.toLowerCase().includes(keyword)

        );

        tampilData(hasil);

    });

    // ===============================
    // LOGOUT
    // ===============================

    document.getElementById("logoutBtn").addEventListener("click", function(e){

        e.preventDefault();

        if(confirm("Yakin ingin logout?")){

            localStorage.clear();

            window.location.href="index.html";

        }

    });

    // ===============================
    // TOMBOL TAMBAH
    // ===============================

    document.getElementById("btnTambah").addEventListener("click",function(){

        alert("Form Tambah Alumni akan dibuat pada tahap berikutnya.");

    });

});

// ============================================
// MENAMPILKAN DATA
// ============================================

function tampilData(data){

    const tbody = document.getElementById("tableData");

    tbody.innerHTML = "";

    if(data.length===0){

        tbody.innerHTML=`
            <tr>
                <td colspan="7" class="text-center">
                    Tidak ada data.
                </td>
            </tr>
        `;

        return;

    }

    data.forEach((item,index)=>{

        tbody.innerHTML +=`

        <tr>

            <td>${index+1}</td>

            <td>${item.nia}</td>

            <td>${item.nama}</td>

            <td>${item.jk}</td>

            <td>${item.ttl}</td>

            <td>${item.angkatan}</td>

            <td>

                <button class="btn btn-warning btn-sm">

                    <i class="bi bi-pencil"></i>

                </button>

                <button class="btn btn-danger btn-sm">

                    <i class="bi bi-trash"></i>

                </button>

            </td>

        </tr>

        `;

    });

    document.getElementById("totalAlumni").textContent = data.length;

    const angkatan = [...new Set(data.map(item=>item.angkatan))];

    document.getElementById("totalAngkatan").textContent = angkatan.length;

    document.getElementById("todayData").textContent = data.length;

}
```
