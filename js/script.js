// Ini Javascript

function submitForm() {
    // Mendapatkan nilai dari form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Memvalidasi input
    if (name === "" || dob === "" || gender === "" || message === "") {
        alert("Semua field harus diisi!");
        return;
    }

    // Mendapatkan waktu saat ini
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString(); // Format waktu sesuai lokal

    // Menampilkan hasil input di halaman
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Hasil Input:</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
        <p><strong>Waktu Pengisian:</strong> ${formattedTime}</p>
    `;

    // Mengosongkan form setelah submit
    document.getElementById('userForm').reset();
}


let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex - 1].style.display = "block";  

    setTimeout(showSlides, 3000); // Mengubah gambar setiap 3 detik
}
