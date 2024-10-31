

function checkPalindrome(){ 
  const inputText = document.getElementById("text-input").value
  if (!inputText){
    alert("Please input a value")
  }
  const result = document.getElementById("result");
  //cleans input text by turning it to an array; lowercase, split each character and filter out whatever matches criteria
  const inputArr = inputText.toLowerCase().split("").filter((c) => !c.match(/[\(\)\\.\s_,-]/gi));
  //console log just to make sure
console.log(inputArr)
for(let i = 0; i<inputArr.length; i++){
    if (inputArr[i] !== inputArr[inputArr.length - i - 1]){
      // ^if the start of the array does not equal the end of the array; working inwards then its not pali
      console.log(inputArr[i])
      result.innerText = `${inputText} is not a palindrome`
      return
    }
  }
  result.innerText = `${inputText} is a palindrome`
  confetti();
  }
