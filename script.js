// JavaScript code to update real-time elements
const updateRealTimeElements = () => {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    
    dayOfWeekElement.textContent = daysOfWeek[now.getUTCDay()];
    utcTimeElement.textContent = now.toISOString().substr(11, 8) + " UTC";
};

// Update real-time elements every second
setInterval(updateRealTimeElements, 1000);

