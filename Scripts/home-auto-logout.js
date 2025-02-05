        // Variabel untuk menyimpan timer
        let inactivityTimer;

        // Waktu dalam detik sebelum menampilkan popup
        const inactivityTimeLimit = 30; // 30 detik

        // Waktu dalam detik sebelum redirect ke halaman lain setelah popup muncul
        const redirectTimeAfterPopup = 5; // 5 detik

        // Fungsi untuk reset timer
        function resetTimer() {
            clearTimeout(inactivityTimer); // Hapus timer sebelumnya
            inactivityTimer = setTimeout(showPopup, inactivityTimeLimit * 1000); // Set timer baru
        }

        // Fungsi untuk menampilkan popup
        function showPopup() {
            const popupContainer = document.querySelector('.showpopup-container');
            popupContainer.style.display = 'block'; // Tampilkan popup

            // Timer untuk redirect ke halaman lain setelah popup muncul
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect ke halaman login
            }, redirectTimeAfterPopup * 1000);
        }

        // Deteksi aktivitas pengguna
        function detectActivity() {
            resetTimer(); // Reset timer saat ada aktivitas
        }

        // Event listener untuk mendeteksi aktivitas
        window.onload = () => {
            resetTimer(); // Mulai timer saat halaman dimuat

            // Tambahkan event listener untuk aktivitas pengguna
            document.addEventListener('mousemove', detectActivity); // Gerakan mouse
            document.addEventListener('keypress', detectActivity); // Penekanan tombol
            document.addEventListener('click', detectActivity); // Klik
            document.addEventListener('scroll', detectActivity); // Scroll
        };