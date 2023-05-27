function displayDateTime() {
      var date = new Date();
      
      // Get the date
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      var dateString = date.toLocaleDateString('en-US', options);
      
      // Get the time
      var timeString = date.toLocaleTimeString();
      
      // Display the date and time in the designated HTML elements
      document.getElementById("date").innerHTML = " " + dateString;
      document.getElementById("time").innerHTML = " " + timeString;
    }
    
    // Call the displayDateTime function on page load
    window.onload = function() {
      displayDateTime();
    };

 // Get the current time
var currentTime = new Date();
var currentHour = currentTime.getHours();
var currentMinute = currentTime.getMinutes();

// Format the time
var formattedTime = currentHour + ":" + (currentMinute < 10 ? "0" + currentMinute : currentMinute);

// Greeting message
var greeting;

if (currentHour < 12) {
  greeting = "Selamat Pagi, Ghozi";
} else if (currentHour < 18) {
  greeting = "Selamat Siang, Ghozi";
} else {
  greeting = "Selamat Malam, Ghozi";
}

// Update the greeting in the HTML
var greetingElement = document.getElementById("greeting");
greetingElement.textContent = greeting;

