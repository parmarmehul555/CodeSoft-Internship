display = document.getElementById('display');
buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Syntax Error";
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    }
    );
}
);

document.addEventListener("keydown", (e) => {

    console.log(e.key);
    if (e.key >= 0 || e.key <= 9 || e.key == '+' || e.key == '-' || e.key == '*' || e.key == '/' || e.key == '(' || e.key == ')' || e.key == '.') {
        display.innerText += e.key;
    }
    else if (e.key == "Backspace") {
        display.innerText = display.innerText.slice(0, -1);
    }
    else if (e.key == 'Enter') {
        try {
            display.innerText = eval(display.innerText);
        } catch {
            display.innerText = "Syntax Error";
        }
    }
})