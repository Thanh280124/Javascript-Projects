const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            currentInput = '';
        } else if (value === '=') {
            try {
                const expression = currentInput
                    .replace(/÷/g, '/')
                    .replace(/×/g, '*')
                    .replace(/,/g, '.');

                currentInput = eval(expression).toString();
            } catch {
                currentInput = 'Error';
            }
        } else if (value === '+/-') {
            if (currentInput.startsWith('-')) {
                currentInput = currentInput.slice(1);
            } else if (currentInput !== '') {
                currentInput = '-' + currentInput;
            }
        } else if (value === '%') {
            const match = currentInput.match(/([-+]?\d+\.?\d*)([+\-×÷])(\d+\.?\d*)$/);

            if (match) {
                const base = parseFloat(match[1]);
                const operator = match[2];
                const percent = parseFloat(match[3]);
                let result;

                switch (operator) {
                    case '+':
                    case '-':
                        result = base * (percent / 100);
                        break;
                    case '×':
                        result = percent / 100;
                        break;
                    case '÷':
                        result = percent / 100;
                        break;
                }

                currentInput = currentInput.replace(/([-+]?\d+\.?\d*)([+\-×÷])(\d+\.?\d*)$/, `${base}${operator}${result}`);
            } else {
                const num = parseFloat(currentInput);
                if (!isNaN(num)) {
                    currentInput = (num / 100).toString();
                }
            }
        } else {
            currentInput += value;
        }

        input.value = currentInput;
    });
});
