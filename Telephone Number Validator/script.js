

const numberVali = () => {
  const userInput = document.getElementById('user-input');
  const results = document.getElementById('results-div');
  const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  if (numberRegex.test(userInput.value) === true){
    results.innerHTML += "Valid US Number: " + userInput.value;
    confetti()
  } else if (!userInput.value){
    alert("Please provide a phone number");
  } else {
    results.innerHTML += "Invalid US Number: " + userInput.value;
  }
}

const numberClear = () => {
  const results = document.getElementById('results-div');
  results.innerHTML = ""
}
