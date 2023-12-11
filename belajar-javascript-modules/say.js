// dengan kata kunci export pada function sayHallo, maka function tersebut akan bisa diakses diluar module
export function sayHallo(name) {
    console.info(`hello ${name}`);
}

function sayGoodBye(name) {
    console.info(`bye ${name}`);
}