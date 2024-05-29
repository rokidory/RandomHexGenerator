const button = document.querySelector("button");
const result = document.getElementById("hex-code");

const generateHex = () => {
    let hexArr = [];
    let currentDigit = 0;
    for (let i = 0; i < 6; i++) {
        currentDigit = Math.floor(Math.random() * 16);
        if (currentDigit > 9) {
            let difference = currentDigit - 9;
            switch (difference) {
                case 1:
                  currentDigit = "A";
                  break;
                case 2:
                  currentDigit = "B";
                  break;
                case 3:
                  currentDigit = "C";
                  break;
                case 4:
                  currentDigit = "D";
                  break;
                case 5:
                  currentDigit = "E";
                  break;
                case 6:
                  currentDigit = "F";
              };
        };
        hexArr.push(currentDigit);
    };
    return "#" + hexArr.join("");
}

const changeColors = (color) => {
    document.body.style.backgroundColor = color;
    button.style.backgroundColor = color;
    result.style.color = color;
}

button.addEventListener("click", () => {
    result.innerText = generateHex();
    changeColors(generateHex());
})