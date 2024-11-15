const inputData = document.getElementById('userInput');
const addButton = document.getElementById('addButton');
const outputDiv = document.getElementById('output');

addButton.addEventListener('click', function() {
    const inputText = inputData.value.trim();

    if (inputText !== '') {
        const newTextDiv = document.createElement('div');
        newTextDiv.textContent = inputText;
        
        outputDiv.appendChild(newTextDiv);
        
        inputData.value = '';
    } else {
        alert('Please enter some text.');
    }
});
 function det() {
    document.getElementById("output").innerHTML = "";
    
 }

