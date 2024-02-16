//Form Validation
function validateForm() {
    var fullName = document.getElementById("fullName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    
    if (fullName == "" || phoneNumber == "" || email == "") {
        alert("Please fill out all required fields.");
        return false;
    }
    
    // Validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    return true;
}


//Dynamic Dropdowns
function populateRoutes(destination) {
    // Make AJAX request to fetch routes based on destination
    // Example:
    // var routes = getRoutesForDestination(destination);
    
    // Populate dropdown with fetched routes
    var routesDropdown = document.getElementById("routesDropdown");
    routesDropdown.innerHTML = "";
    routes.forEach(function(route) {
        var option = document.createElement("option");
        option.text = route;
        routesDropdown.add(option);
    });
}

//Interactive Map
// Initialize map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add marker on click
map.on('click', function(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;
    var marker = L.marker([lat, lng]).addTo(map);
});

//Real-time Updates
function updateBusSchedule() {
    // Make AJAX request to fetch updated bus schedule data
    // Example:
    // var busSchedule = getUpdatedBusSchedule();
    
    // Update DOM with fetched data
    document.getElementById("busSchedule").innerHTML = busSchedule;
}

// Update bus schedule every 30 seconds
setInterval(updateBusSchedule, 30000);

// JavaScript function to populate seat selection based on bus type
function populateSeatSelection() {
    var busType = document.getElementById("bus-type").value;
    var seatLocationSelect = document.getElementById("seat-location");
    seatLocationSelect.innerHTML = ""; // Clear previous options
    // Add options based on bus type
    if (busType === "standard") {
        // Add standard bus seat options
        for (var i = 1; i <= 30; i++) {
            var option = document.createElement("option");
            option.value = "Seat " + i;
            option.text = "Seat " + i;
            seatLocationSelect.appendChild(option);
        }
    } else if (busType === "luxury") {
        // Add luxury bus seat options
        for (var i = 1; i <= 20; i++) {
            var option = document.createElement("option");
            option.value = "Luxury Seat " + i;
            option.text = "Luxury Seat " + i;
            seatLocationSelect.appendChild(option);
        }
    } else if (busType === "express") {
        // Add express bus seat options
        for (var i = 1; i <= 40; i++) {
            var option = document.createElement("option");
            option.value = "Express Seat " + i;
            option.text = "Express Seat " + i;
            seatLocationSelect.appendChild(option);
        }
    }
}
// Call the function when bus type changes
document.getElementById("bus-type").addEventListener("change", populateSeatSelection);


document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the element with id "bus-type"
    var busTypeElement = document.getElementById("bus-type");
    if (busTypeElement) {
        busTypeElement.addEventListener("change", populateSeatSelection);
    }
});


// Define a variable to store the bus schedule
var busSchedule = "";

// Function to update the bus schedule
function updateBusSchedule() {
    // Make an AJAX request to fetch the bus schedule data
    // Replace this with your actual AJAX request
    fetch('https://api.example.com/bus-schedule')
        .then(response => response.json())
        .then(data => {
            // Update the bus schedule variable with the fetched data
            busSchedule = data.schedule;
            // Update the DOM to display the bus schedule
            document.getElementById("busSchedule").innerHTML = busSchedule;
        })
        .catch(error => {
            console.error('Error fetching bus schedule:', error);
        });
}

// Call the updateBusSchedule function initially to populate the bus schedule
updateBusSchedule();

// Set an interval to update the bus schedule periodically (every 30 seconds)
setInterval(updateBusSchedule, 30000);


