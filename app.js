let numbers = parseInt(prompt("Nhap so luong day fibonaccy ban muon xuat ra : "));
if (numbers > 2) {
    let a = 0, b = 1, c = 1;
    let textResult = "1 <br>  ";
    let count = 0;
    while (count < (numbers - 1)) {
        c = a + b;
        a = b;
        b = c;
        textResult += c + "<br>";
        count++;
    }
    document.getElementById("textResult").innerHTML = textResult;
} else {
    alert("Nhap sai!!")
}
