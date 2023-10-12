document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".searchinput");
    const buttons = document.querySelectorAll(".buttons button");
    const historyButton = document.querySelector(".history_button");
    const historyDiv = document.querySelector(".history");

    let history = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.textContent === "CE") {
                input.value = "";
            } else if (button.textContent === "=") {
                try {
                    const result = eval(input.value);
                    history += input.value + " = " + result + "<br>";
                    historyDiv.innerHTML = history;
                    input.value = result;
                } catch (error) {
                    input.value = "Ошибка";
                }
            } else {
                input.value += button.textContent;
            }
        });
    });

    historyButton.addEventListener("click", function () {
        historyDiv.style.display = "block";
    });
});