function updateClock() {
    const now = new Date();
    // Mendapatkan jam, menit, dan detik
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // Menambahkan leading zero jika nilai kurang dari 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    // Format waktu
    const timeString = `${hours}:${minutes}:${seconds}`;
    // Memperbarui elemen HTML dengan waktu terbaru
    document.getElementById('clock').textContent = timeString; // Gunakan getElementById
}
// Memanggil fungsi updateClock setiap detik (1000 ms)
setInterval(updateClock, 1000);
// Memastikan jam langsung diperbarui saat halaman dimuat
updateClock();