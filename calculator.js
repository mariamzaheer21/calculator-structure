const display = document.getElementById('currentDisplay');
let current = '0';
let firstNum = null;
let operator = null;
let reset = false;

function update() {
    display.textContent = current;
}

// Adding numbers manually
document.querySelector('button[value="7"]').onclick = () => {
    if (reset) { current = '7'; reset = false; }
    else { current = current === '0' ? '7' : current + '7'; }
    update();
};

document.querySelector('button[value="8"]').onclick = () => {
    if (reset) { current = '8'; reset = false; }
    else { current = current === '0' ? '8' : current + '8'; }
    update();
};

document.querySelector('button[value="9"]').onclick = () => {
    if (reset) { current = '9'; reset = false; }
    else { current = current === '0' ? '9' : current + '9'; }
    update();
};

document.querySelector('button[value="4"]').onclick = () => {
    if (reset) { current = '4'; reset = false; }
    else { current = current === '0' ? '4' : current + '4'; }
    update();
};

document.querySelector('button[value="5"]').onclick = () => {
    if (reset) { current = '5'; reset = false; }
    else { current = current === '0' ? '5' : current + '5'; }
    update();
};

document.querySelector('button[value="6"]').onclick = () => {
    if (reset) { current = '6'; reset = false; }
    else { current = current === '0' ? '6' : current + '6'; }
    update();
};

document.querySelector('button[value="1"]').onclick = () => {
    if (reset) { current = '1'; reset = false; }
    else { current = current === '0' ? '1' : current + '1'; }
    update();
};

document.querySelector('button[value="2"]').onclick = () => {
    if (reset) { current = '2'; reset = false; }
    else { current = current === '0' ? '2' : current + '2'; }
    update();
};

document.querySelector('button[value="3"]').onclick = () => {
    if (reset) { current = '3'; reset = false; }
    else { current = current === '0' ? '3' : current + '3'; }
    update();
};

document.querySelector('button[value="0"]').onclick = () => {
    if (reset) { current = '0'; reset = false; }
    else if (current !== '0') { current = current + '0'; }
    update();
};

document.querySelector('button[value="."]').onclick = () => {
    if (!current.includes('.')) {
        if (reset) { current = '0.'; reset = false; }
        else { current = current + '.'; }
        update();
    }
};

// Operators
document.querySelector('button[value="+"]').onclick = () => {
    firstNum = parseFloat(current);
    operator = '+';
    reset = true;
};

document.querySelector('button[value="-"]').onclick = () => {
    firstNum = parseFloat(current);
    operator = '-';
    reset = true;
};

document.querySelector('button[value="*"]').onclick = () => {
    firstNum = parseFloat(current);
    operator = '*';
    reset = true;
};

document.querySelector('button[value="/"]').onclick = () => {
    firstNum = parseFloat(current);
    operator = '/';
    reset = true;
};

document.querySelector('button[value="%"]').onclick = () => {
    firstNum = parseFloat(current);
    operator = '%';
    reset = true;
};

// Equal button
document.getElementById('equal').onclick = () => {
    if (operator && firstNum !== null) {
        let second = parseFloat(current);
        let result;
        if (operator === '+') result = firstNum + second;
        else if (operator === '-') result = firstNum - second;
        else if (operator === '*') result = firstNum * second;
        else if (operator === '/') result = second === 0 ? 'Error' : firstNum / second;
        else if (operator === '%') result = firstNum % second;
        
        current = result.toString();
        operator = null;
        firstNum = null;
        reset = true;
        update();
    }
};

// Clear buttons
document.getElementById('clear').onclick = () => {
    current = '0';
    firstNum = null;
    operator = null;
    reset = false;
    update();
};

document.getElementById('erase').onclick = () => {
    current = '0';
    reset = false;
    update();
};

update();
