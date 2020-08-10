async function hello() {

    return 'world';
}

// Only one Value type, or more.
let lucky :any = 23;
console.log(lucky);
lucky = '23';

console.log(lucky);
lucky = true;
console.log(lucky);
