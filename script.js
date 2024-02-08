const inputQuestion = document.getElementById("input-question")
const buttonAdd = document.getElementById("add-button")

buttonAdd.addEventListener('click', function(){
    let inputText = inputQuestion.value;
    console.log(inputText)
});