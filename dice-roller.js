function rollDice() {
    for (let i=1; i<= 5; i++) {
        const dieValue = Math.floor(Math.random() * 6) + 1;
        document.getElementById(`die${i}`).value = dieValue;
    }
}

window.onload = function() {
    rollDice();

    const rollButton = document.getElementById('rollButton');

    if (rollButton) {
        rollButton.addEventListener('click', rollDice);

        rollButton.focus();
    }

    this.document.addEventListener('keypress', function(event){
        if (event.key === 'enter'){
            const button = document.getElementById('rollButton');
            if(button){
                button.click();
            }
        }
    });


};