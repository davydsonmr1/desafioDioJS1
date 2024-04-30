document.addEventListener("DOMContentLoaded", function() {
    const currentNumberElement = document.getElementById("currentNumber");
    const incrementButton = document.getElementById("incrementButton");
    const decrementButton = document.getElementById("decrementButton");

    let count = 0;

    function updateCurrentNumber() {
        currentNumberElement.textContent = count;
        if (count < 0) {
            currentNumberElement.classList.add("red-text");
        } else {
            currentNumberElement.classList.remove("red-text");
        }
        checkButtonState();
    }

    function checkButtonState() {
        if (count <= 0) {
            decrementButton.disabled = true;
        } else {
            decrementButton.disabled = false;
        }

        if (count >= 10) {
            incrementButton.disabled = true;
        } else {
            incrementButton.disabled = false;
        }
    }

    incrementButton.addEventListener("click", function() {
        count++;
        updateCurrentNumber();
    });

    decrementButton.addEventListener("click", function() {
        count--;
        updateCurrentNumber();
    });

    updateCurrentNumber();
});
