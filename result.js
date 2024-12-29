function generateAndCheck() {
    const min = 0;
    const max = 9;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const oddEven = (randomNumber % 2 === 0) ? "Small" : "Big";
    document.getElementById('result').textContent = `${randomNumber}`;

    document.getElementById('oddeven').textContent = ` ${oddEven}`;

    if (oddEven == "Small") {
        document.getElementById('color').textContent = `Green`;
    } else {
        document.getElementById('color').textContent = `Red`;
    }

}