// исходный код
const user = {
    id: 7,
    name: 'Bob',
    token: 12343423
};

//todo 9.1 Получите из объекта user значение id и разместите его в константу userId не используя выражение user.id.
const {id: userId} = user
//todo 9.2 Создайте новый объект на базе объекта user без свойства token через деструктуризацию объекта
const {token, ...user2} = user
//todo 9.3 Заморозьте объект user, так чтобы в него нельзя было добавить свойства.
Object.freeze(user)
//todo 9.4 Создайте на базе объекта user новый объкт с доп. полями login и password
const user3 = Object.assign(user3, user)
user3.login = 'ya'
user3.password = '123'
//todo 9.5 Добавьте к объекту user метод getId который возвращает свойство id
user.getId = function() { return user.id }
//todo 9.6 Добавьте к объекту user метод setId который утанавливает свойство id
user.setId = function(_id) { user.id = _id }
//todo 9.7 Проитерируйте объект user так чтобы при итерации можно было получить его ключ и значение.
for (let key in user) {
    console.log("Ключ: " + key + " Значение: " + user[key])
}
//todo 9.8 Сериализуйте объект в json
let json = JSON.stringify(user)
//todo 9.8 Преобразуйте объект в ассоциативный массив.
let arr = new Map()
for (let key in user) {
    arr.set(key, user[key])
}
console.log(arr)