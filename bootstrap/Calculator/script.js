const actions = document.querySelector(".actions");
const ans = document.querySelector(".ans");
console.log(actions);
console.log(ans);
let expression = "";
let a = 0;
actions.addEventListener("click", (e) => {
  console.log(e.target);
  const value = e.target.dataset["value"];

  if (value !== undefined) {
    if (value == "ce") {
      expression = "";
      ans.value = 0;
      return true;
    } else if (value == "ln") {
      expression = Math.log(expression);
    }else if (value == "x^2") {
      expression = square();
    } else if (value == "radic") {
      expression = Math.sqrt(expression);
    } else if (value == "log") {
      expression = Math.log(expression);
    } else if (value == "sin") {
      expression = Math.sin(expression);
    } else if (value == "cos") {
      expression = Math.cos(expression);
    } else if (value == "tan") {
      expression = Math.tan(expression);
    } else if (value == "deg") {
      expression = toDegrees(expression);
    } else if (value == "e") {
      expression = Math.E;
    } else if (value == "x!") {
      expression = factorial(expression);
    } else if (value == "inv") {
      expression = 1 / expression;
    } else if (value == "%") {
      expression = eval(expression + "/ 100");
    } else if (value == "=") {
      const answer = eval(expression);
      expression = answer;
    } else if (value == "del") {
      expression = expression.slice(0, -1);
    } else {
      expression += value;
    }

    if (expression == undefined) {
      expression = "";
      ans.value = 0;
    } else {
      ans.value = expression;
    }
  }
});

const square = () => {
  return eval(expression * expression);
};

const toDegrees = (radians) => {
  return (radians * 180) / Math.PI;
};

const factorial = (n) => {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};