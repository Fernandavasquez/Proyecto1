const keysAndValues = {a: "Apple", b: "Microsoft", c: "Google"};
const new1 = Object.keys(keysAndValues).sort().reduce((cont, key) => {
    cont[key] = keysAndValues[key];
    return cont;
},{});
console.log(Object.keys(new1))
console.log(Object.values(new1))