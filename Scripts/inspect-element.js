document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Hanya di gunakan oleh developer');
});

document.addEventListener('keydown', function(event) {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
        alert('Akses di blokir, digunakan hanya untuk developer');
    }
});