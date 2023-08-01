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


const input1 = [1, 2, 4, 3, 5, 3, 2, 1];
const input20 = [[100, 200, 300, 400], 2];
const input21 = [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4];
const input22 = [[-3, 4, 0, -2, 6, -1], 2];
const input30 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
const input31 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 4 }, ee: 'car' }
}

// console.log(arraySort(input1));
// console.log(getMaxSubarray(input21[0], input21[1]));
console.log(sumAllEvenNumbers(input30))