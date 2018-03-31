var X, Y, amount;

X = prompt("Введите число X", 35);
console.log('Пользователь ввел число X:' + X);
console.log ('Введенное число X:' + typeof X);

Y = prompt("Введите число Y",20);
console.log('Пользователь ввел число Y:' + Y);
console.log ('Введенное число Y:' + typeof Y);

X = parseInt(X);
Y = parseInt(Y);
amount = X + Y;

alert("Сумма X + Y = " + amount);