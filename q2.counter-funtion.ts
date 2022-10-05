// 2. Counter Function
// Implement the `counter` function according to requirements:
// - Function accepts a number as the first argument. This number represents the
// initial value for the counter.
// - If no value passed to a function, use `0` as initial value.
// - Function returns array with two function:
// - First function allows us to get the current counter value.
// - Second function increases the internal counter value by one.
// - Multiple calls of `counter` function create independent instances of counter


function Counter(num: number) {
    let counter = 1;
    return [function () { return counter }, function () { counter += 1; return counter }]
};

const [getA, nextA] = Counter(1);

console.log(getA());
console.log(nextA());
console.log(getA());
console.log(nextA());
console.log(getA());