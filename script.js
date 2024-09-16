const makeChange = (c) => {
    let total = parseInt(c);
    let obj = {
        q: 25,
        d: 10,
        n: 5,
        p: 1
    };
    let result = {
        q: 0,
        d: 0,
        n: 0,
        p: 0
    };

    while (total > 0) {
        for (let item in obj) {
            if (total >= obj[item]) {
                result[item] += 1;
                total -= obj[item];
                break;
            }
        }
    }
    return result;
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

