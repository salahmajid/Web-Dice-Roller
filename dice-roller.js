const API_URL = 'dice-server-sja-awf9gzgearfag4eg.canadacentral-01.azurewebsites.net';

async function rollDice() {
    try {
        const response = await fetch(`${API_URL}/api/roll`);
        const data = await response.json();

        for (let i = 1; i <= 5; i++) {
            document.getElementById(`die${i}`).value = data.dice[i-1];
        }
    }
    catch (error) {
        alert('Server error: make sure server is running');
    }
}


window.onload = function () {
    fetch(`${API_URL}/api/wake`).catch(e => console.log('Wake failed'));


    rollDice();
    const rollButton = document.getElementById('rollButton');
    if (rollButton) {
        rollButton.addEventListener('click', rollDice);
        rollButton.focus();
    }

    document.addEventListener('keypress', function (event) {
        if (event.key === 'enter') {
            const button = document.getElementById('rollButton');
            if (button) {
                button.click();
            }
        }
    });


};

function testCORS() {
    fetch(`${API_URL}/api/no-cors`).catch(e => alert('CORS blocked'));
}