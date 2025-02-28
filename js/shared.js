function showDateTime() {
    let now = new Date();
    let options = { timeZone: "Asia/Tashkent" };
    let uzbTime = new Date(now.toLocaleString("en-US", options));

    let day = String(uzbTime.getDate()).padStart(2, '0');
    let month = String(uzbTime.getMonth() + 1).padStart(2, '0');
    let year = uzbTime.getFullYear(); // Full year (yyyy)
    let hours = String(uzbTime.getHours()).padStart(2, '0');
    let minutes = String(uzbTime.getMinutes()).padStart(2, '0');
    let seconds = String(uzbTime.getSeconds()).padStart(2, '0');

    document.getElementById("currentDateTime").innerText = 
        `${day}.${month}.${year} ${hours}:${minutes}:${seconds} (GMT +5)`;
}

// Update time every second
setInterval(showDateTime, 1000);

// Run showDateTime when the page loads
window.onload = showDateTime;


function updateDateTime() {
    let now = new Date();

    // Format date as dd.mm.yyyy in Tashkent time
    let optionsDate = { timeZone: "Asia/Tashkent", day: "2-digit", month: "2-digit", year: "numeric" };
    let formattedDate = new Intl.DateTimeFormat("en-GB", optionsDate).format(now);
    document.getElementById("date").textContent = formattedDate.replace(/\//g, "."); // Convert format to dd.mm.yyyy

    // Format time as HH:MM:SS in Tashkent time
    let optionsTime = { timeZone: "Asia/Tashkent", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    let formattedTime = new Intl.DateTimeFormat("en-GB", optionsTime).format(now);
    document.getElementById("time").textContent = formattedTime;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to avoid delay