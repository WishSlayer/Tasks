//todo: Написать функцию анаграммы
// 'finder', 'friend' === true
// 'test', 'sets' === false
// 'abc', 'aaa' === false
// 'abb', 'aab' === false
let a = "friend"
let b = "finder"

function sort(str) {
    let mass = []
    for (let i = 0; i < str.length; i++) {
        mass.push(str[i])
    }
    str = String(mass.sort())
    return str
}

function isAnagramm(str1, str2) {
    if (str1 === str2) {
        console.log("Анаграмма")
    }
    else {
        console.log("Не анаграмма")
    }
}

isAnagramm(sort(a), sort(b))