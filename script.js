

let time = document.querySelector(`[data-testid="currentUTCTime"]`);

setInterval(() => {
  const d = Date.now();
  time.innerHTML = d;
}, 100);

    function updateDayOfWeek() {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
        const currentDate = new Date();
        const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        currentDayElement.textContent = currentDayOfWeek;
    }
    updateDayOfWeek();
    
