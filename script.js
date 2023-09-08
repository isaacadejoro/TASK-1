document.addEventListener("DOMContentLoaded", function () {

    // Function to update the day of the week
    function updateDayOfWeek() {
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const dayIndex = today.getDay();
        document.getElementById("dayOfWeek").textContent = daysOfWeek[dayIndex];
    }

    // Function to update the UTC time
    function updateUTCTime() {
        const now = new Date();
        document.getElementById("utcTime").textContent = now.toUTCString();
    }

    // Call the functions initially
    updateDayOfWeek();
    updateUTCTime();

    // Update data button click event
    updateButton.addEventListener("click", function () {
        // Simulate updating data
        nameElement.textContent = "Name: Jane Doe";
        ageElement.textContent = "Age: 25";
        locationElement.textContent = "Location: Los Angeles";
    });
});