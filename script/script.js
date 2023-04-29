let id = document.getElementById("number");
let id2 = document.getElementById("number2");
let size = $(window).width();

console.log(size);

function hideIt() {
    var value = parseInt(document.getElementById('number').value, 3);
    value = isNaN(value) ? 1 : value;
    value++;
    document.getElementById('number').value = value;
    console.log(value)
    if (value > 2) {
        document.getElementById("number2").style.display = "none";
        document.getElementById("number").style.display = "block";
        value = 1;
        return value;
    } else if (value < 2) {
        document.getElementById("number2").style.display = "block";
        document.getElementById("number2").style.display = "none";
        value = 2;
        return value;
    }
}