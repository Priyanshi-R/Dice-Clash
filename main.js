document.addEventListener("DOMContentLoaded", function() {
    const startGameButton = document.getElementById("button");

    if (startGameButton) {
        startGameButton.addEventListener("click", function() {
            window.location.href = "game.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const startGameButton = document.getElementById("btn2");

    if (startGameButton) {
        startGameButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const rollDiceButton = document.getElementById("btn1");

    if (rollDiceButton) {
        rollDiceButton.addEventListener("click", function() {
            function rollDice() {
                const randomNumber1 = Math.floor(Math.random() * 6) + 1;
                const randomDiceClass1 = "dice" + randomNumber1;
                document.querySelector(".img1").className = "die img1 " + randomDiceClass1;

                const randomNumber2 = Math.floor(Math.random() * 6) + 1;
                const randomDiceClass2 = "dice" + randomNumber2;
                document.querySelector(".img2").className = "die img2 " + randomDiceClass2;

                let winnerText = "It's a Draw!";
                if (randomNumber1 > randomNumber2) {
                    winnerText = "You Win!";
                } else if (randomNumber1 < randomNumber2) {
                    winnerText = "Computer Wins!";
                }
                document.querySelector(".winner").textContent = winnerText;
            }

            rollDice();
        });
    }
});