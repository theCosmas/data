data = [{ 'principal': 2500, 'time': 1.8 }, { 'principal': 1000, 'time': 5 }, { 'principal': 3000, 'time': 1 }, { 'principal': 2000, 'time': 3 }]

function interestCalculator(cos) {
    let rate;
    let interest;
    let interestData = [...cos];
    for (let bi of interestData) {
        if (bi['principal'] >= 2500 && (bi['time'] > 1 && bi['time'] <= 3)) {
            rate = 3;
            bi['rate'] = rate;
        } else if (bi['principal'] >= 2500 && bi['time'] >= 3) {
            rate = 4;
            bi['rate'] = rate;
        } else if (bi['principal'] < 2500 || bi['time'] <= 1) {
            rate = 2;
            bi['rate'] = rate;
        } else {
            rate = 1;
            bi['rate'] = rate;
        }
        interest = (bi['principal'] * bi['time'] * bi['rate']) / 100;
        bi['interest'] = interest
    }
    console.log(interestData);
    return interestData
}

interestCalculator(data);

