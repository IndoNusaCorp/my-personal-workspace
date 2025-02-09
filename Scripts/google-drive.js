// Pastikan elemen dengan id 'dropArea' sudah ada di HTML
const dropArea = document.querySelector('.google-drive-rectangle');

// Event listener untuk drag & drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Tambahkan efek saat file di-drag ke dalam area
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.add('dragover'), false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => dropArea.classList.remove('dragover'), false);
});

// Tangani file yang didrop
dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        uploadFileToGoogleDrive(files[0]);
    }
}

// Fungsi untuk mengupload file ke Google Drive
async function uploadFileToGoogleDrive(file) {
    const accessToken = 'YOUR_GOOGLE_DRIVE_ACCESS_TOKEN'; // Ganti dengan token OAuth2 yang valid
    
    if (!accessToken) {
        alert('Access token is required!');
        return;
    }
    
    const metadata = {
        name: file.name,
        mimeType: file.type
    };
    
    const formData = new FormData();
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    formData.append('file', file);
    
    try {
        const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            body: formData
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert(`File uploaded successfully! File ID: ${data.id}`);
        } else {
            alert(`Error uploading file: ${data.error.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while uploading the file.');
    }
}
