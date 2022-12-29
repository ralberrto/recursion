function sumRange(n) {
    if (n <= 0) return 0;
    return n + sumRange(n - 1);
    
}

function pow(x, n) {
    if (n <= 0) return 1;
    return x * pow(x, n - 1);

}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function all(arr, cb) {
    if (arr.length === 0) return true;
    return cb(arr.pop()) && all(arr, cb);
}

function product(arr) {
    if (arr.length === 0) return 1;
    return arr.pop() * product(arr);
}

function contains(obj, val) {
    for (let v of Object.values(obj)) {
        if (v === val) return true;
        if (v instanceof Object) {
            if (contains(v, val)) return true;
        }
    }
    return false;
}

function intInArray(arr) {
    let intCount = 0;
    for (let i in arr) {
        if (Number.isInteger(arr[i])) intCount++;
        if (typeof arr[i] === 'object') {
            intCount += intInArray(arr[i]);
        }
    }
    return intCount;
}

function nestedSumOfSquares(arr) {
    let sum = 0;
    for (let i in arr) {
        if (Array.isArray(arr[i])) {
            sum += nestedSumOfSquares(arr[i]);
        } else {
            sum += arr[i] ** 2;
        }
    }
    return sum;
}

function replicate(times, value) {
    if (times <= 0) return [];
    return [value].concat(replicate(times - 1, value));
}

//console.log(sumRange(100));
//console.log(pow(3, 4));
//console.log(factorial(9));
//console.log(all([1, 2, 4, 3, 5, 6, 7, 8], (x) => x <= 7));
//console.log(product([1, 2, 6, 3]));
//console.log(contains({ a: 1, b: 2, c: { d: 1, e: 4, f: { g: 8, h: 27, i: 'a' } } }, 3));
//console.log(intInArray([[1], [2, 3, 3.1, 3.2, 4, 'foo', [5, 6, 'foo'], 'ass', 6.1, 7, 8, 8.7 ]]));
//console.log(nestedSumOfSquares([1, 2, 3, [1, 2, 3, [1, 2, 3]], 1, 2, 3, 9]));
//console.log(replicate(8, 'x'))