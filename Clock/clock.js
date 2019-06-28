$(document).ready(function () {
    
    // setInterval return an id, will need to clear id and avoid setInterval multipling
    var intervalID = 0;

    function switchMeridiem(meridiem) {
        if (meridiem === "AM") {
          return "PM";
      } else return "AM";
    }

    // try toLocaleTimeString()
    function displayTime(place) {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Setting the AM and PM meridiem, default is AM
        var meridiem = "AM"; 

        // Convert from 24 hour to 12 hour format and keep track of the meridiem
        if (hours > 12) {
            hours -= 12;
            meridiem = "PM";
        }

        switch (place) {
            case "Beijing":
                meridiem = switchMeridiem(meridiem);
                break;
            case "Sydney":
                hours += 2;
                meridiem = switchMeridiem(meridiem);
                break;
            case "Moscow":
                hours -= 1;
                meridiem = switchMeridiem(meridiem);
                break;
            case "Tokyo":
                hours += 1;
                meridiem = switchMeridiem(meridiem);
                break;           
            default:
                // will run local time (EST), do nothing
                break;
        }

        // 0AM / 0PM return 12
        if (hours === 0) {
            hours = 12;
        }

        // If hours is less than ten, add a 0                    
        if (hours < 10) {
            hours = "0" + hours;
        }

        // If minutes is less than ten, add a 0                    
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // If seconds is less than ten, add a 0                
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

    function displayCountry() {
        var selectedCountry = $("#country").children("option:selected").val();
        selectedCountry = selectedCountry.charAt(0).toUpperCase() + selectedCountry.slice(1);
        var countryTag = document.getElementById("countryName");
        countryTag.innerText = selectedCountry;
    }

    function defaultTime() {
        // By default: show time, but time is static
        displayTime();

        // Show the date
        displayDate();

        // Makes the clock dynamic by running the displayTime every second
        return setInterval(displayTime, 1000);
    }

    function selectedTime() {
        var country = $("#countryName").text();
            
        // Makes the clock dynamic by running the displayTime every second
        return setInterval(function () {
            displayTime(country);
        }, 1000); 
    }

    // set local time as the default and keep the setInterval id
    intervalID = defaultTime();

    // Check if user select something in the form
    $("#country").change(function() {
        // clear the setInterval 
        clearInterval(intervalID);
        
        if ($("#country option:selected").val().length != 0) {
            // Hide the date, if user select a different country's time
            $("#date").hide();

            // Rename the weekday div to the countryName
            $("#weekday").attr("id","countryName");
            //$("#weekday").prop("id", "countryName");

            displayCountry();

            intervalID = selectedTime();            
        } else {
            // Change countryName to weekday
            $("#countryName").attr("id","weekday");

            // Show the date div
            $("#date").show();

            intervalID = defaultTime();
        } 
    });   
});
