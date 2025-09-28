function expandedForm(num) {
    let digits = num.toString().split('');
    let result = [];

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== '0') {
            result.push(digits[i] + '0'.repeat(digits.length - i - 1));
        }
    }

    return result.join(' + ');
}