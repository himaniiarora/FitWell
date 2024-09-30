document.getElementById('goal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const goalInput = document.getElementById('goal').value;
    const goalMessage = document.getElementById('goal-message');

    if (goalInput) {
        goalMessage.textContent = `Your goal: "${goalInput}" has been set!`;
        goalMessage.style.color = 'green';
        this.reset();
    } else {
        goalMessage.textContent = 'Please enter a goal.';
        goalMessage.style.color = 'red';
    }
});

function initMap() {
    const location = { lat: 40.7128, lng: -74.0060 }; // Example coordinates (New York City)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}


