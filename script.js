const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultCon = document.querySelector(".result-container");
const response = document.getElementById("result");

checkBtn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    let userInput = textInput.value;
   
  
    if (userInput == "") {
        alert("Please input a value.");
        return;
    } 

    const cleanStr = userInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split("").reverse().join("");

    if (reversedStr == cleanStr) {
        resultCon.style.display = "block";
        response.innerHTML = `${userInput} is a palindrome`
    } else {
        resultCon.style.display = "block";
        response.innerHTML = `${userInput} is not a palindrome`
    }

}