var money, time;

function start() {
    money = 50000;
    time = '';

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц", '');
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    var i = 0;
    var j = 0;
    do {
        if (j >= 5) {
            console.log('j>5');
            return;
        }
        var a = 's' + i;
        var b = 0 + i;
        if (typeof (a) === 'string' && a !== null && b !== null && a.length <= 10) {
            appData.expenses[a] = b;
            i++;
        } else {
            console.log('Введите строку до 10 символов');
            j++;
        }
    } while (i < 2);
}

chooseExpenses();

function detectDayBudget() {
    return appData.budget / 30;
}

appData.moneyPerDay = detectDayBudget();

console.log('Ежедневный бюджет: ' + appData.moneyPerDay.toFixed(2));

function checkSavings() {
    if (appData.savings === true) {
        var save = 300000;
        var percent = 10;
        appData.monthIncome = save / 100 / 12 * percent;
        console.log('Доход в месяц: ' + appData.monthIncome);

    }
}

checkSavings();

function chooseOptExpenses() {
    for (var i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = 100 + i;
    }
}

chooseOptExpenses();