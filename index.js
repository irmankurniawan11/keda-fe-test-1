
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
    for (let i = 0; i < array.length - number + 1; i++) {
        let sum = 0;
        for (let j = i; j < i+number; j++) {
            sum += array[j];
        }
        result.push(sum);
    }
    return arraySort(result).shift();
}

const input1 = [1, 2, 4, 3, 5, 3, 2, 1];
const input20 = [[100, 200, 300, 400], 2];
const input21 = [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4];
const input22 = [[-3, 4, 0, -2, 6, -1], 2];
// console.log(arraySort(input1));
console.log(getMaxSubarray(input22[0], input22[1]));