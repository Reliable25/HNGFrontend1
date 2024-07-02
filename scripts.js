function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('current-time').textContent = utcTime;
    document.getElementById('current-day').textContent = dayOfWeek;
}

// Update the time and day immediately and then every second
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
