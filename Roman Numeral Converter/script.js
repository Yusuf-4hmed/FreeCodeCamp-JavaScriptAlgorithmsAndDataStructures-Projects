const convertBtn = document.getElementById('convert-btn');
let romanList = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

function convertToRoman() {
    const output = document.getElementById('output');
    const numberInput = document.getElementById('number');
    let num = parseInt(numberInput.value);

    if (isNaN(num) || numberInput.value == "") {
        output.innerHTML = "Please enter a valid number";
        console.log("Invalid input");
    } else if (num < 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
        console.log("Number is less than 1");
    } else if (num >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
        console.log("Number is 4000 or more");
    } else {
        let romanNumeral = "";

        for (let i = 0; i < romanList.length; i++) {
            while (num >= romanList[i][1]) {
                romanNumeral += romanList[i][0];
                num -= romanList[i][1];
            }
        }

        output.innerText = romanNumeral;
    }
}

const inputNumber = document.getElementById("number")

inputNumber.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    
    document.getElementById("convert-btn").click();
  }
});
