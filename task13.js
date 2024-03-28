//todo: В массиве размерности 10, найти минимальный и максимальный элементы, поменять их местами.
let mass = [5, 7, 20, 10, 1, 2, 2, 3, 50, 4]

// Функция поиска минимального и максимального элементов исходного массива
function findMinMax(mass) {
    let minValue = Infinity
    let maxValue = -Infinity
    for (let item of mass) {
        if (item < minValue) {
            minValue = item
        }
        if (item > maxValue) {
            maxValue = item
        }
    }
    let arr = [minValue, maxValue]
    return changeMass(mass, arr)
}

// Функция замены элементов массива
function changeMass(mass, arr) {
    // Получение индексов минимального и максимального элементов исходного массива
    let pos1 = mass.indexOf(arr[0])
    let pos2 = mass.indexOf(arr[1])
    // Меняем элементы местами
    mass[pos1] = arr[1]
    mass[pos2] = arr[0]
    return mass
}

mass = findMinMax(mass)

// Вывод массива
console.log(mass)