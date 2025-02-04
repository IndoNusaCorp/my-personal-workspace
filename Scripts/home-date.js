function updateDate() {
    const now = new Date();

    // Mendapatkan hari, bulan, dan tahun
    let day = now.getDate(); // Mendapatkan tanggal (1-31)
    let month = now.getMonth() + 1; // Mendapatkan bulan (0-11, tambahkan 1)
    let year = now.getFullYear(); // Mendapatkan tahun

    // Menambahkan leading zero jika nilai kurang dari 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    // Format tanggal
    const dateString = `${day}/${month}/${year}`;

    // Memperbarui elemen HTML dengan tanggal terbaru
    document.getElementById('date-content').textContent = dateString;
}

// Memanggil fungsi updateDate setiap detik (1000 ms)
setInterval(updateDate, 1000);

// Memastikan tanggal langsung diperbarui saat halaman dimuat
updateDate();