// todo: решить Задача 2 см. lesson9.pdf

// исходный код
class Car {
    constructor (f, r) {
        this.fuel = f
        this.rate = r
        console.log('Машина создана. Бак заправлен на ' + this.fuel + ' л. Расход топлива на 100 км: ' + this.rate + ' %.')
     }
     reFuel (q) {
        let diff = (this.fuel + q) - 100
        this.fuel = (this.fuel + q) <= 100 ? (this.fuel + q) : 100
        return (this.fuel + q) > 100 ? diff : 0
     }
     go(_distance) {
        let rate_procent = _distance / 100 * this.rate
        let rate_amount = this.fuel / 100 * rate_procent
        this.fuel -= rate_amount
        console.log('Машина проехала дистанцию в ' + _distance + ' км.')
     }
     getFuelLevel() {
        console.log('Остаток в баке после поездки: ' + this.fuel + ' л.')
        return (this.fuel)
     }
}

let mercedesBenz = new Car(71, 15)
mercedesBenz.go(199)
mercedesBenz.getFuelLevel()