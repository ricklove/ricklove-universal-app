const a = 42;
let b: number;

if (a > 40) {
    b = 43;

    if (a > b) {
        b = 46;
    }
}

export { b };