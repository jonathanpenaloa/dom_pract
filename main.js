// gettin the cal elememets
btnEl = document.querySelectorAll('div');
inputEl = document.querySelector('input');


solutionVars = {
    firstNum: undefined,
    secondNum: undefined,
    answer: undefined,
    operator: undefined,
}


 const asignData = (string, solutionVars) => {
    let operators = ["/", "*", "+", "-"];
    if(operators.includes(string)) {
        
        if(solutionVars.operator === undefined) {
            solutionVars.operator = string;
            inputEl.value = solutionVars.operator;
        } 
        
    } else if (string === "=") {
        console.log(solutionVars.firstNum !== undefined );
        if(solutionVars.firstNum !== undefined && solutionVars.secondNum !== undefined && solutionVars.operator !== undefined) {
            console.log("in if chaeck");
            if(solutionVars.operator === "+") {
                solutionVars.answer =  +solutionVars.firstNum + +solutionVars.secondNum;

            } else if (solutionVars.operator === "-") {
                solutionVars.answer = +solutionVars.firstNum - +solutionVars.secondNum;

            } else if (solutionVars.operator === "/") {
                solutionVars.answer = +solutionVars.firstNum / +solutionVars.secondNum;

            } else if (solutionVars.operator === "*") {
                solutionVars.answer = +solutionVars.firstNum * +solutionVars.secondNum;

            } 
            inputEl.value = solutionVars.answer
        }


    } else {
        if(solutionVars.firstNum === undefined) {
            solutionVars.firstNum = string;
            inputEl.value = solutionVars.firstNum;
        } else if(solutionVars.secondNum === undefined && solutionVars.operator !== undefined) {
            solutionVars.secondNum = string;
            inputEl.value = solutionVars.secondNum;
        }
    }
 }

//aded event listener to each button
btnEl.forEach(btn => {
    btn.addEventListener('click', () => {
        asignData(btn.textContent, solutionVars);
    })
});