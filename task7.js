//todo: Из предыдущего задания (task6) сгенерируйте динамически шахматное поле из массива в HTML 
// и раставьте шахматы в соответсвующем порядке.
let board = [[],[],[],[],[],[],[],[]]

board[0][0] = '&#9820;'
board[0][2] = '&#9821;'
board[0][3] = '&#9818;'
board[0][7] = '&#9820;'
board[1][0] = '&#9823;'
board[1][3] = '&#9823;'
board[1][4] = '&#9815;'
board[1][5] = '&#9823;'
board[1][6] = '&#9816;'
board[1][7] = '&#9823;'
board[2][0] = '&#9822;'
board[2][5] = '&#9822;'
board[3][1] = '&#9823;'
board[3][3] = '&#9816;'
board[3][4] = '&#9817;'
board[3][7] = '&#9817;'
board[4][6] = '&#9817;'
board[5][3] = '&#9817;'
board[6][0] = '&#9817;'
board[6][2] = '&#9817;'
board[6][4] = '&#9812;'
board[7][0] = '&#9819;'
board[7][6] = '&#9821;'

let str = ""
for (let subItem of board) {
    subItem.length = 8;
    str += "<div class='row'>"
    for (let item of subItem) {
        if (!item) {
            item = "&nbsp;"
            str += "<div class='col'>" + item + "</div>"
        }
        else {          
            str += "<div class='col'>" + item + "</div>"
        }
    }
    str += "</div>"  
}
let node = document.querySelector('#board')
node.innerHTML = str