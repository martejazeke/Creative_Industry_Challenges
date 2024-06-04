const travelTimes = {
    'Abu Dhabi': {
        'Al Ain': 1,
        'Al Maktoum': 1.5,
        'Dubai': 2,
        'Sharjah': 2.5,
        'RAK': 4,
        'Fujairah': 4
    },
    'Al Ain': {
        'Abu Dhabi': 1,
        'Al Maktoum': 1.5,
        'Dubai': 2,
        'Sharjah': 2.5,
        'RAK': 4,
        'Fujairah': 3
    },
    'Al Maktoum': {
        'Abu Dhabi': 1.5,
        'Al Ain': 1.5,
        'Dubai': 0.5,
        'Sharjah': 1,
        'RAK': 2,
        'Fujairah': 2
    },
    'Dubai': {
        'Abu Dhabi': 2,
        'Al Ain': 2,
        'Al Maktoum': 0.5,
        'Sharjah': 0.5,
        'RAK': 2,
        'Fujairah': 2
    },
    'Sharjah': {
        'Abu Dhabi': 2.5,
        'Al Ain': 2.5,
        'Al Maktoum': 1,
        'Dubai': 0.5,
        'RAK': 1.5,
        'Fujairah': 2
    },
    'RAK': {
        'Abu Dhabi': 4,
        'Al Ain': 4,
        'Al Maktoum': 2.5,
        'Dubai': 2,
        'Sharjah': 1.5,
        'Fujairah': 2
    },
    'Fujairah': {
        'Abu Dhabi': 4,
        'Al Ain': 3,
        'Al Maktoum': 2,
        'Dubai': 2,
        'Sharjah': 2,
        'RAK': 2
    }
};

function searchFlights() {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (from === to) {
        resultsContainer.innerHTML = '<p>Please select different airports for From and To.</p>';
        return;
    }

    const travelTime = travelTimes[from][to];
    const adultPrice = travelTime * 500;
    const childPrice = travelTime * 250;
    const totalPrice = (adults * adultPrice) + (children * childPrice);

    const resultItem = document.createElement('div');
    resultItem.className = 'result-item';

    const departureTime = new Date();
    const arrivalTime = new Date(departureTime.getTime() + travelTime * 60 * 60 * 1000);

    resultItem.innerHTML = `
        <div class="result-header">
            <div>
                <strong>From:</strong>
                <span>${from} International Airport</span>
            </div>
            <div>Flight Duration</div>
            <div style="text-align: center;">
                <strong>To:</strong>
                <span>${to} International Airport</span>
            </div>
        </div>
        <div class="result-body">
            <div>${formatTime(departureTime)} ⟶ ${formatTime(arrivalTime)}</div>
            <div>${travelTime} h</div>
            <div>${totalPrice} DHS</div>
        </div>
    `;

    resultsContainer.appendChild(resultItem);
}

function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}