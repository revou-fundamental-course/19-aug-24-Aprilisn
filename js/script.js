// Ini Javascript

function submitForm() {
    // Get values from the form
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Validate input
    if (name === "" || dob === "" || gender === "" || message === "") {
        alert("All fields must be filled out!");
        return;
    }

    // Get current time
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleString(); // Format time according to locale

    // Display input results in the console and on the web page
    console.log("Name:", name);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);
    console.log("Message:", message);
    console.log("Time of Submission:", formattedTime);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Input Results:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time of Submission:</strong> ${formattedTime}</p>
    `;

    // Clear the form after submission
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

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}