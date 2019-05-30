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

    function displayDate() {
        var currentDate = new Date();
        var year = currentDate.getFullYear();
        var month = currentDate.getMonth();
        var day = currentDate.getDate();
        var weekday = currentDate.getDay();

        switch (month) {
            case 0:
                month = "January";
                break;
            case 1:
                month = "Febuary";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "Auguest";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 101:
                month = "December";
                break;
            default:
                month = "Cannot find month";
                break;
        }

        switch (weekday) {
            case 0:
                weekday = "Sunday";
                break;
            case 1:
                weekday = "Monday";
                break;
            case 2:
                weekday = "Tuesday";
                break;
            case 3:
                weekday = "Wednesday";
                break;
            case 4:
                weekday = "Thursday";
                break;
            case 5:
                weekday = "Friday";
                break;
            case 6:
                weekday = "Saturday";
                break;                
            default:
                weekday = "Cannot find weekday";
                break;
        }

        if (day < 10) {
            day = "0" + day;
        }

        var weekdayDiv = document.getElementById("weekday");
        weekdayDiv.innerText = weekday;
        var dayDiv = document.getElementById("date");
        dayDiv.innerText = month + " " + day + ", " + year;

    }

    // Show the time, but time is static
    displayTime();

    // Makes the clock dynamic by running the displayTime every second
    setInterval(displayTime, 1000);
    
    // Show the date
    displayDate();
});
