### 1. Fungsi `arraySort`
Fungsi `arraySort` yaitu fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript

```js
Input : [1, 2, 4, 3, 5, 3, 2, 1]			
Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
```
### 2. Fungsi `getMaxSubarray`
Fungsi `getMaxSubarray` yaitu fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi

```js
Input : ([100, 200, 300, 400], 2)				
Expected Output : 700 		// didapatkan dari 300 + 400
```
```js
Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		
Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
```
```js
Input : ([-3, 4, 0, -2, 6, -1], 2)				
Expected Output : 5 		// didapatkan dari 6 + -1
```
### 3. Fungsi `sumAllEvenNumbers`
Fungsi `sumAllEvenNumbers` yaitu fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested object

```js
Input :
{
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
Output: 6
```
```js
Input:
{
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};
Output: 12
```
## Unit Testing

1. Jalankan command `npm install` untuk menginstall dependency jest
2. Jalankan command `npx jest` untuk menjalankan unit test