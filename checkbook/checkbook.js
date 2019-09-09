function balance() { 

const input = `
1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tires;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`;

const roundt = (num) => Number(num).toFixed(2);

const balance = (checkbook) => {
    const [ORIGINAL_BALANCE, ...prices] = String(checkbook)
        .replace(/[^a-zA-Z0-9. \n]/g, '')
        .trim()
        .split('\n')
        .map((newExpense) => newExpense.trim());

    const parsedprices = prices
        .map((newExpense) => {
            const words = newExpense.split(/\s/g);
            const cost = parseFloat(words[words.length - 1]);
                return {
                newExpense,
                cost,
            };
        });

    const {
    balance,
    totalExpense,
    result,
    } = parsedprices
        .reduce(({balance, totalExpense, result}, {newExpense, cost}) => {
            const remainingBalance = balance - cost;

            return {
                balance: remainingBalance,
                totalExpense: totalExpense + cost,
                result: [...result, {
                newExpense,
                cost,
                remainingBalance,
                }]
            };
        }, {
            balance: parseFloat(ORIGINAL_BALANCE),
            totalExpense: 0,
            result: [],
        });

        const averageExpense = totalExpense / result.length;

    return [
    `Starting Balancs: ${roundt(ORIGINAL_BALANCE)}`,
    result.map(({newExpense, remainingBalance}) =>
        `${newExpense} Remaining Balance ${roundt(remainingBalance)}`).join('\n'),
    `Total expense: ${roundt(totalExpense)}`,
    `Average expense: ${roundt(averageExpense)}`,
    ].join('\n');
};
console.log(balance(input));
}
balance();