function calculate(operation) {
    let num1 = +(document.getElementById('num1').value);
    let num2 = +(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0 || num1 === 0) {
                    result = "Cannot divide by zero";
                } 
                else {
                    result = num1 / num2;
                }
                break;
        }
    }

    document.getElementById('result').value = result;
}
