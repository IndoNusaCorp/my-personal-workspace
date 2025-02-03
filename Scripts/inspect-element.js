document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('Klik kanan dinonaktifkan!');
});

document.addEventListener('keydown', function(event) {
    if (
        event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.key === 'U')
    ) {
        event.preventDefault();
        alert('Akses Developer Tools dibatasi!');
    }
});