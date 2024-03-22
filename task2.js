// todo: Даны три переменные a и b и с им присвоены целочисленные значения.
// Необходимо вывести значения по возрастанию.
// Пример:
let a = 10
let b = 7
let c = 8
let min, mid, max
// Поиск минимального числа
if (a/b < 1 && a/c < 1) min = a
else if (c/b < 1 && c/a < 1) min = c
else min = b
// Поиск максимального числа
if (a/b > 1 && a/c > 1) max = a
else if (c/b > 1 && c/a > 1) max = c
else max = b
// Поиск среднего числа
mid = (a + b + c) - (min + max)
// Вывод
console.log(min, mid, max)