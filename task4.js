//todo: Задано число. Проверить на  истинность (true или false) что 
// сумма цифр данного трехзначного числа является четным числом. Числа меняются !
// Пример:
let a = 554
let str = String(a)
let massive = str.split('')
let summ = 0
for (let n = 0; n < massive.length; n++) {
    summ += Number(massive[n])
}
if (!summ == 0) {
    if ((summ % 2) == 0) {
        console.log('Сумма цифр числа ' + a + ' - четное число!')
    }
    else {
        console.log('Сумма цифр числа ' + a + ' - нечетное число!')
    }
}
else {
    console.log('Сумма цифр числа ' + a + ' - равна 0!')
}