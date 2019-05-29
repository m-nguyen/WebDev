$(document).ready(function () {

    function displayTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Setting the AM and PM meridiem
        var meridiem = "AM";  // Default is AM

        // Convert from 24 hour to 12 hour format and keep track of the meridiem
        if (hours > 12) {
            hours -= 12;
            meridiem = "PM";
        }

        // 0 AM and 0 PM should return as 12
        if (hours === 0) {
            hours = 12;
        }

        // If hours is less than ten add a 0                    
        if (hours < 10) {
            hours = "0" + hours;
        }

        // If minutes is less than ten add a 0                    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // If seconds is less than ten add a 0                
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        var clockDiv = document.getElementById("clock");
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }

    // Show the time, but time is static
    displayTime();

    // Makes the clock dynamic by running the displayTime every second
    setInterval(displayTime, 1000);

});