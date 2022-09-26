let date = new Date()
console.log(date)

console.log(date.toLocaleDateString('it-IT'))

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())

document.getElementById('firstDate').innerHTML = date

function showDate(){
    document.getElementById("day").innerHTML = date.getDate()
    document.getElementById("month").innerHTML = date.getMonth() + 1
    document.getElementById("year").innerHTML = date.getFullYear()
}