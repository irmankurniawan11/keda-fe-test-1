const {sumAllEvenNumbers, getMaxSubarray, arraySort} = require('./index')

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

const output1 = [5, 4, 3, 3, 2, 2, 1, 1];
const output20 = 700;
const output21 = 39;
const output22 = 5;
const output30 = 6;
const output31 = 12;

test('Function 1 seharusnya menghasilkan output [5, 4, 3, 3, 2, 2, 1, 1]', () => {
    expect(arraySort(input1)).toStrictEqual(output1);
});
test('Function 2.0 seharusnya menghasilkan output 700', () => {
    expect(getMaxSubarray(input20[0], input20[1])).toBe(output20);
});
test('Function 2.1 seharusnya menghasilkan output 39', () => {
    expect(getMaxSubarray(input21[0], input21[1])).toBe(output21);
});
test('Function 2.2 seharusnya menghasilkan output 5', () => {
    expect(getMaxSubarray(input22[0], input22[1])).toBe(output22);
});

test('Function 3.0 seharusnya menghasilkan output 6', () => {
    expect(sumAllEvenNumbers(input30)).toBe(output30);
});
test('Function 3.1 seharusnya menghasilkan output 12', () => {
    expect(sumAllEvenNumbers(input31)).toBe(output31);
});