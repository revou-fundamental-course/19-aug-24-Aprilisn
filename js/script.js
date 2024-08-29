// Ini Javascript

function formValidation() {
    // Ini cara ambil DOM
    let name = document.getElementById('name').value;
    // Ini kondisi pemisahnya
    if (name == ''){
        alert('Formnya kosong');
        // Ini kondisi jika Formnya kosong
        document.getElementById('result').innerHTML = '-';
    } else{
        // Ini kondisi jika Formnya diisi
        document.getElementById('result').innerHTML = name;
    }
    console.log(name);
}

let indexSlide = 1;
showBanner();

function nextSlide(n) {

}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    let index = 0
    while (index < listImage.length){
        index++;
    }
    console.log(listImage);
}