module.exports = function reverse (n) {
    n = n + '';
    let reversedText = n.split('').reverse().join('');
    let reversed = parseInt(reversedText, 10);
    return reversed

}

