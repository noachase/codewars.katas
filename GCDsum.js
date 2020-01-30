function gcd(a, b) {
    let d = 0;
    while (a == b) {
        a = a / 2;
        b = b / 2;
        d = d + 1;
    }
    while (a != b) {
        if (a % 2 == 0) {
            a = a / 2;
        } else if (b % 2 == 0) {
            b = b / 2;
        } else if (a > b) {
            a = (a - b) / 2;
        } else {
            b = (b - a) / 2;
        }
    }
    let g = a;
    console.log(g);
}

gcd (12, 4)