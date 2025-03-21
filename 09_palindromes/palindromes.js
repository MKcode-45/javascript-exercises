const palindromes = function (str) {
    let reversedStr = str.split("").reverse().filter((letters) => /^[A-Za-z0-9]$/.test(letters)).join('').toLowerCase();
    let strInput = str.split("").filter((letters) => /^[A-Za-z0-9]$/.test(letters)).join('').toLowerCase();
    if(strInput === reversedStr) return true;

    return false;
};

// Do not edit below this line
module.exports = palindromes;
