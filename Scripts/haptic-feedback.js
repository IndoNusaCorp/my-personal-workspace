// Fungsi untuk memberikan feedback haptic atau animasi shake
function triggerHapticFeedback(element) {
    if ("vibrate" in navigator) {
        navigator.vibrate(50); // Getarkan perangkat selama 50ms
    } else {
        // Tambahkan efek animasi shake sebagai fallback
        element.classList.add('shake-effect');
        setTimeout(() => {
            element.classList.remove('shake-effect');
        }, 200);
    }
}

// Daftar ID elemen yang ingin diberi feedback haptic
const elementIds = [
    'icon-whatsapp',
    'icon-roblox',
    'icon-google',
    'icon-chat-gpt',
    'icon-qwen-ai',
    'icon-binusmaya',
    'icon-linkedin',
    'icon-youtube',
    'icon-spotify',
    'icon-discord'
];

// Menambahkan event listener ke setiap elemen
document.addEventListener('DOMContentLoaded', () => {
    elementIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            console.log(`Event listener ditambahkan ke elemen dengan ID: ${id}`);
            element.addEventListener('click', () => {
                triggerHapticFeedback(element);
            });
        } else {
            console.warn(`Elemen dengan ID '${id}' tidak ditemukan.`);
        }
    });
});