function playGame() {
    let beginNumber = parseInt(prompt("Enter begin number"));
    let endNumber = parseInt(prompt("Enter end number"));
    let randomNumber = Math.floor((endNumber - beginNumber + 1) * Math.random()) + beginNumber;
    let enterNumber = parseInt(prompt("Moi ban chon so : "));
    if (enterNumber >= beginNumber && enterNumber <= endNumber) {
        for (let i = 0; i < 3; i++) {
            if (enterNumber === randomNumber) {
                alert("Chuc Mung ban da doan trung");
                return false;
            } else if (enterNumber > randomNumber) {
                alert("Sai! So nhap lon hon");
                enterNumber = parseInt(prompt("Moi ban chon lai so : "));
                continue;
            } else {
                alert("Sai! So nhap nho hon");
                enterNumber = parseInt(prompt("Moi ban chon lai so : "));
                continue;
            }
        }
        alert("Ban da thua !!");
    } else {
        alert("So nhap khong nam trong vung chon!!")
    }
}

