/*  --------------------------------------------------- ORIGINAL SOLUTION NO WALKTHROUGH------------------------------------------------
        //Get values from user -- controller function
        function getValues(){
            let inputFizz = document.getElementById("fizzInput").value;
            let inputBuzz = document.getElementById("buzzInput").value;
            let numbers = [];
            //We need to validate our input
            //Parse into integers
            inputFizz = parseInt(inputFizz);
            inputBuzz = parseInt(inputBuzz);
            if(Number.isInteger(inputFizz) && Number.isInteger(inputBuzz) && inputFizz != inputBuzz){
                //We call fizzBuzz
                numbers = fizzBuzz();
                //We call displayValues
                displayNumbers(numbers, inputBuzz, inputFizz);
            } else if(inputFizz == inputBuzz){
                alert('Please enter separate values');
            } else {
                alert('Please enter numbers only');
            }
            

        }
        //fizzbuzz the values -- logic function
        function fizzBuzz(){
            let numbers = [];
            //We want to get all numbers from start to end
            for (let index = 1; index <= 100; index++) {
            //This will execute in a loop until index = eValue
            numbers.push(index);
            
            }
            return numbers;  
        }

        //display values in a table -- view function
        function displayNumbers(numbers, inputFizz, inputBuzz){
            let templateRows = "";
            for (let index = 0; index < numbers.length; index++) {
                let className = "fizzbuzz";
                let number = numbers[index];
                if(number % inputFizz == 0 && number % inputBuzz == 0){
                    className = "fizzbuzz";
                    
                } else if(number % inputBuzz == 0 && number % inputFizz != 0){
                    className = "buzz";
                } else if (number % inputFizz == 0 && number % inputBuzz != 0){
                    className ="fizz";
                } else{
                    className = "none";
                }
                templateRows += `<tr><td class=${className}>${number}</td></tr>`;
        
                
            
            }
            document.getElementById("results").innerHTML = templateRows;
        }
--------------------------------------------------- ORIGINAL SOLUTION NO WALKTHROUGH------------------------------------------------*/

/*----------------------------------------------------- CODER FOUNDRY SOLUTION -----------------------------------------------------*/

// get values from the user. We need to get the fizz value and the buzz value.
function getValues() {
    // get user values from the page

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    // Check entered values are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue) && fizzValue != buzzValue) {
        // We call fizzbuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);
    } else if (fizzValue == buzzValue) {
        alert("Please enter separate values");
    } else {
        alert("Please enter integers, not decimals or fractions");
    }
}


function fizzBuzz(fValue, bValue) {
    let returnArray = [];

    // loop from 1 to 100

    //inside loop we need to check the current value in three steps
    for (i = 1; i <= 100; i++) {
        // check to see if divisible by both three and five, if yes push 'FizzBuzz' into array and not the number
        if (i % fValue == 0 && i % bValue == 0) {
            returnArray.push("FizzBuzz");
            // check to see if divisible by fizz value (3), if yes push 'Fizz' into array and not the number         
        } else if (i % fValue == 0) {
            returnArray.push("Fizz");
            // check to see if divisible by fizz value (5), if yes push 'Buzz' into array and not the number
        } else if (i % bValue == 0) {
            returnArray.push("Buzz");
            // if none then push the number into the array
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
}


function displayData(fbArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear the table first
    tableBody.innerHTML = "";
    // loop over the array and create a tablerow for each item.

    // add all the rows to the table.

    for (let index = 0; index < fbArray.length; index += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab just the tds and put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
}