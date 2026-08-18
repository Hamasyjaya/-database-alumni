/*

* ==========================================
* API.JS
* SISTEM DATABASE ALUMNI
* ==========================================
  */

/* ==========================================
CEK API
========================================== */

async function cekAPI() {

try {

```
var response =
  await fetch(
    API_URL + "?action=getAll"
  );

var result =
  await response.json();

return result;
```

} catch (error) {

```
console.error(
  "API Error:",
  error
);

return {

  success: false,

  message:
    "Tidak dapat terhubung ke server."

};
```

}

}

/* ==========================================
AMBIL SEMUA DATA ALUMNI
========================================== */

async function getAlumni() {

try {

```
var response =
  await fetch(
    API_URL + "?action=getAll"
  );


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "getAlumni:",
  error
);


return {

  success: false,

  message:
    "Gagal mengambil data alumni."

};
```

}

}

/* ==========================================
CARI ALUMNI BERDASARKAN NIA
========================================== */

async function getAlumniByNia(nia) {

try {

```
var url =
  API_URL +
  "?action=getByNia&nia=" +
  encodeURIComponent(nia);


var response =
  await fetch(url);


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "getAlumniByNia:",
  error
);


return {

  success: false,

  message:
    "Gagal mencari data alumni."

};
```

}

}

/* ==========================================
TAMBAH DATA ALUMNI
========================================== */

async function tambahAlumni(data) {

try {

```
var payload = {

  action: "add",

  nia:
    data.nia || "",

  nama:
    data.nama || "",

  tempatLahir:
    data.tempatLahir || "",

  tanggalLahir:
    data.tanggalLahir || "",

  alamat:
    data.alamat || "",

  telepon:
    data.telepon || "",

  jenisKelamin:
    data.jenisKelamin || "",

  angkatan:
    data.angkatan || ""

};


var response =
  await fetch(
    API_URL,
    {

      method: "POST",

      body:
        JSON.stringify(payload)

    }
  );


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "tambahAlumni:",
  error
);


return {

  success: false,

  message:
    "Gagal menambahkan data alumni."

};
```

}

}

/* ==========================================
UPDATE DATA ALUMNI
========================================== */

async function updateAlumni(data) {

try {

```
var payload = {

  action: "update",

  nia:
    data.nia || "",

  nama:
    data.nama || "",

  tempatLahir:
    data.tempatLahir || "",

  tanggalLahir:
    data.tanggalLahir || "",

  alamat:
    data.alamat || "",

  telepon:
    data.telepon || "",

  jenisKelamin:
    data.jenisKelamin || "",

  angkatan:
    data.angkatan || ""

};


var response =
  await fetch(
    API_URL,
    {

      method: "POST",

      body:
        JSON.stringify(payload)

    }
  );


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "updateAlumni:",
  error
);


return {

  success: false,

  message:
    "Gagal memperbarui data alumni."

};
```

}

}

/* ==========================================
HAPUS DATA ALUMNI
========================================== */

async function hapusAlumni(nia) {

try {

```
var payload = {

  action: "delete",

  nia: nia

};


var response =
  await fetch(
    API_URL,
    {

      method: "POST",

      body:
        JSON.stringify(payload)

    }
  );


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "hapusAlumni:",
  error
);


return {

  success: false,

  message:
    "Gagal menghapus data alumni."

};
```

}

}

/* ==========================================
STATISTIK DASHBOARD
========================================== */

async function getStatistics() {

try {

```
var response =
  await fetch(
    API_URL +
    "?action=stats"
  );


if (!response.ok) {

  throw new Error(
    "HTTP Error " +
    response.status
  );

}


var result =
  await response.json();


return result;
```

} catch (error) {

```
console.error(
  "getStatistics:",
  error
);


return {

  success: false,

  message:
    "Gagal mengambil statistik."

};
```

}

}

/* ==========================================
FORMAT TANGGAL
========================================== */

function formatTanggal(tanggal) {

if (!tanggal) {

```
return "-";
```

}

var date =
new Date(tanggal);

if (
isNaN(
date.getTime()
)
) {

```
return tanggal;
```

}

var hari =
String(
date.getDate()
).padStart(2, "0");

var bulan =
String(
date.getMonth() + 1
).padStart(2, "0");

var tahun =
date.getFullYear();

return (
hari +
"-" +
bulan +
"-" +
tahun
);

}

/* ==========================================
ESCAPE HTML
========================================== */

function escapeHTML(text) {

if (
text === null ||
text === undefined
) {

```
return "";
```

}

return String(text)

```
.replace(
  /&/g,
  "&amp;"
)

.replace(
  /</g,
  "&lt;"
)

.replace(
  />/g,
  "&gt;"
)

.replace(
  /"/g,
  "&quot;"
)

.replace(
  /'/g,
  "&#039;"
);
```

}
