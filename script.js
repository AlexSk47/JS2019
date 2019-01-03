var money, time;

money = prompt("Ваш бюджет на месяц");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (var index = 0; index < 2; index++) {
    var exp0 = prompt("Введите обязательную статью расходов в этом месяце");
    var exp1 = prompt("Во сколько обойдется?");
    appData.expenses[exp0] = exp1;
}

alert(appData.money / 30);

