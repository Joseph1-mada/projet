let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/let myButton = document.querySelector');
    }
    let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');