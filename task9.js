//todo: Определить, является ли строка полиндромом. Палиндром - это число или слова, читающиеся одинаково в обоих направлениях.
function reverse(new_str) {
    let rev_str = ""
    for (let i = new_str.length - 1; i >= 0; i--) {
        rev_str += new_str[i]
    }
    return rev_str
}

function isPolindrom(rev_str) {
    if (new_str === rev_str) {
        console.log(str + " - полиндром")
    }
    else {
        console.log(str + " - не полиндром")
    }
}

let str = "Уж истово вот сижу"
let new_str = str.split(' ').join('').toLowerCase()
let rev_str = reverse(new_str)
isPolindrom(rev_str)