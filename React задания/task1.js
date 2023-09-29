let a = Math.floor(Math.random() * 100);
let res;

if (a > 10) {
    res = a;
} else {
    res = a * 2
    if (res > 5) {
        res = 2 * res + 1;
    } else {
        if (res < 3) {
            res = 1;
        } else {
            res = 2 * (res - 2);
            if (res > 4) {
                res = 5;
            } else {
                if (res % 2 == 0) {
                    res = 6;
                } else {
                    res = 7;
                }
            }
        } 
    }
}

console.log('Результат конструкции if...else =', res);

let b = 4;
let result;

switch (true) {
    case b > 10:
        result = b;
        break;

    default:
        result = b * 2;

        switch (true) {
            case result > 5:
                result = 2 * b + 1;
                break;

            default:
                switch (true) {
                    case b < 3:
                        result = 1;
                        break;

                    default:
                        result = 2 * (b - 2);

                        switch (true) {
                            case result > 4:
                                result = 5;
                                break;

                            default:
                                switch (true) {
                                    case b % 2 == 0:
                                        result = 6;
                                        break;

                                    default:
                                        result = 7;
                                }
                        }
                }
        }
}

console.log('Результат конструкции switch =', result)