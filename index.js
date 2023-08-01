function arraySort(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[j] > array[i]) {
                var temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
        }
    }
    return array
}

function getMaxSubarray(array, number) {
    let result = [];
    for (let i = 0; i <= array.length - number; i++) {
        let sum = 0;
        for (let j = i; j < i+number; j++) {
            sum += array[j];
        }
        result.push(sum);
    }
    return arraySort(result).shift();
}

function sumAllEvenNumbers(input) {
    let result = 0;
    function findEvenNumbers(input) {
        for (const key in input) {
            if(typeof input[key] === "object") findEvenNumbers(input[key]);
            else if(typeof input[key] === "number")
                if(input[key] % 2 === 0) result += input[key];
        }
    }
    findEvenNumbers(input);
    return result;
}

module.exports = {sumAllEvenNumbers, getMaxSubarray, arraySort};