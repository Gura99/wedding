function playAudio() {
    var audio = document.getElementById('music');
    var logo = document.getElementById('logo');
    var audioPlayer = document.getElementById('audio-player');
    if (audio.paused) {
        audio.play();
        logo.style.animation = "spin 4s linear infinite";
    } else {
        audio.pause();
        logo.style.animation = "none";
    }

    audioPlayer.style.display = 'block';
}
function playMusicWithButton() {
   
    var audio = document.getElementById("music");
    var logo = document.getElementById("logo");
   
    audio.play();
    logo.style.animation = "spin 4s linear infinite";
}


// wish
 // Load wishes from local storage on page load
 document.addEventListener("DOMContentLoaded", loadWishes);

 function submitWish() {
     var name = document.getElementById("nameInput").value;
     var wish = document.getElementById("wishInput").value;

     if (name && wish) {
         // Save wish to local storage
         saveWish(name, wish);

         // Clear form inputs
         document.getElementById("nameInput").value = "";
         document.getElementById("wishInput").value = "";

         // Update wishes display
         loadWishes();
     } else {
         alert("Please enter both your name and wish.");
     }
 }

 function saveWish(name, wish) {
     var wishes = JSON.parse(localStorage.getItem("wishes")) || [];
     wishes.push({ name: name, wish: wish });
     localStorage.setItem("wishes", JSON.stringify(wishes));
 }

 function loadWishes() {
     var wishesContainer = document.getElementById("wishesContainer");
     var wishes = JSON.parse(localStorage.getItem("wishes")) || [];

     // Clear existing wishes
     wishesContainer.innerHTML = "";

     // Display wishes
     wishes.forEach(function(wishObj) {
         var wishMessage = document.createElement("div");
         wishMessage.textContent = `🌟 ${wishObj.name} wishes:  ${wishObj.wish}`;
         wishesContainer.appendChild(wishMessage);
     });
 }
//  clear

 window.addEventListener("beforeunload", function () {
    localStorage.clear();
});


// Set the target wedding date (YYYY, MM-1, DD)
const weddingDate = new Date(2024, 0, 28); // Assuming June 1, 2023

function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = weddingDate - now;

    if (timeDifference <= 0) {
        document.getElementById('countdown').innerHTML = 'Congratulations! It\'s our wedding day!';
    } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days}h&nbsp ${hours}h&nbsp ${minutes}mm&nbsp ${seconds}s`;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the initial countdown
updateCountdown();

// copyNumber

function copyNumber() {
    // Get the number from the HTML
    var numberToCopy = document.getElementById('numberDisplay').innerText;

    // Create a temporary input element
    var tempInput = document.createElement('input');
    tempInput.value = numberToCopy;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the content of the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the temporary input element from the document
    document.body.removeChild(tempInput);

    // Change the button text to "Copied"
    var copyButton = document.getElementById('copyButton');
    copyButton.innerHTML =  `<button><a>COPIED!</a></button>`;

    console.log('Number copied to clipboard: ' + numberToCopy);
  }
  
