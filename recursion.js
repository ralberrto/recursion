function fibs(n) {
    const series = [0, 1];
    if (n < 3) {
        series.splice(n)
        return series;
    }
    for (let i = 2; i < n; i++) {
        series.push(series[i - 2] + series[i - 1]);
    }
    return series;
}

function fibsRec(n) {
    if (n < 3) {
        let series = [0, 1];
        series.splice(n)
        return series;
    }
    let series = fibsRec(n - 1);
    const lastIndex = series.length - 1;
    return series.concat([series[lastIndex] + series[lastIndex - 1]]);
}

function mergeSort(arr) {
    function split(arr) {
        const mid = Math.floor(arr.length/2);
        let rightHalf = arr.splice(mid);
        let leftHalf = arr;
        return [leftHalf, rightHalf];
    }

    function merge(leftArr, rightArr) {
        const merged = [];
        let leftInx = 0;
        let rightInx = 0;
        while (leftInx < leftArr.length && rightInx < rightArr.length) {
            if (leftArr[leftInx] <= rightArr[rightInx]) {
                merged.push(leftArr[leftInx]);
                leftInx++;
            } else {
                merged.push(rightArr[rightInx]);
                rightInx++;
            }
        }
        if (rightInx < rightArr.length) {
            return merged.concat(rightArr.splice(rightInx));
        }
        if (leftInx < leftArr.length) {
            return merged.concat(leftArr.splice(leftInx));
        }
    }

    if (arr.length <= 1) return arr;
    let [leftHalf, rightHalf] = split(arr);
    return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

console.log(fibs(8));
console.log(fibsRec(8));
const arr = [9, 8, 0, 4, 9, 10, 123, 18, 19, 0, 2, 3, 41, 29, 19, 6];
console.log(arr);
console.log(arr.length);
const sortedArr = mergeSort(arr);
console.log(sortedArr);
console.log(sortedArr.length);