//todo:  Задан произвольный url необходимо получить его домен.
// Пеример:
// var url = "http://www.ozon.ru/context/detail/id/19677670/"
// Домен: www.ozon.ru
let url = "http://www.ozon.ru/context/detail/id/19677670/"
const url_str = new URL(url)
console.log("Домен: " + url_str.hostname)