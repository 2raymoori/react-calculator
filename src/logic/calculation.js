export default class Calculation {
  constructor(expression) {
    if (expression.startsWith("-")) {
      expression = "0" + expression;
    } else if (expression.startsWith("+")) {
      expression = expression.substr(1, expression.lenth);
    }
    this.expression = expression;
  }

  infixToPostFix = (input) => {
    const operatorStack = [];
    const postFixStack = [];
    const expItems = input.split("");
    let numberAccum = "";
    let tracker = 0;
    expItems.map((a) => {
      tracker++;
      if (
        a === "*" ||
        a === "/" ||
        a === "+" ||
        a === "-" ||
        a === "(" ||
        a === ")"
      ) {
        if (numberAccum !== "") {
          postFixStack.push(numberAccum);
          numberAccum = "";
        }
        if (
          operatorStack.length === 0 ||
          operatorStack[operatorStack.length - 1] === "("
        ) {
          operatorStack.push(a);
        } else if (
          (operatorStack[operatorStack.length - 1] === "*" ||
            operatorStack[operatorStack.length - 1] === "/") &&
          (a === "+" || a === "-")
        ) {
          postFixStack.push(operatorStack.pop());
          operatorStack.push(a);
        } else if (
          (operatorStack[operatorStack.length - 1] === "+" ||
            operatorStack[operatorStack.length - 1] === "-") &&
          (a === "/" || a === "*")
        ) {
          operatorStack.push(a);
        } else if (
          ((operatorStack[operatorStack.length - 1] === "*" ||
            operatorStack[operatorStack.length - 1] === "/") &&
            (a === "*" || a === "/")) ||
          ((operatorStack[operatorStack.length - 1] === "+" ||
            operatorStack[operatorStack.length - 1] === "-") &&
            (a === "+" || a === "-"))
        ) {
          postFixStack.push(operatorStack.pop());
          operatorStack.push(a);
        } else if (a === "(") {
          operatorStack.push(a);
        } else if (a === ")") {
          // Come back to revisit this
          while (true) {
            let top = operatorStack.pop();
            if (top === "(") {
              break;
            } else {
              postFixStack.push(top);
            }
          }
        }
      } else {
        numberAccum = numberAccum + a + "";
        if (tracker === expItems.length) {
          postFixStack.push(numberAccum);
        }
      }
    });
    if (operatorStack.length > 0) {
      while (true) {
        postFixStack.push(operatorStack.pop());
        if (operatorStack.length === 0) break;
      }
    }
    return postFixStack;
  };

  postFixEval = (postOutPut) => {
    let stack2 = []; // Second Stack to Store the result of the computation.
    //let x = "";
    let tmp = ""; // To Store the value of the current character processed.
    for (let i = 0; i < postOutPut.length; i++) {
      tmp = postOutPut[i];
      if (tmp === "*" || tmp === "/" || tmp === "+" || tmp === "-") {
        // console.log("STACK2 VAL ================>"+stack2)

        let ope1 = stack2.pop(); // Remove from stack and use as first operand
        let ope2 = stack2.pop(); // Remove from stack and use as second operand
        let op1 = Number(ope1); // remove the comma (,) from the operand and convert it to a number
        let op2 = Number(ope2);
        // Checking while processing if any of the operands ( op1 or op2 ) could not be converted to a number.
        if (isNaN(op2) || isNaN(op1)) {
          return "Wrong input!!";
        }
        let res = 0; // Store the result of the computation
        // Below doing the Arithmetrics.
        switch (tmp) {
          case "*":
            res = op1 * op2;
            break;
          case "/":
            res = op2 / op1;
            break;
          case "+":
            res = op1 + op2;
            break;
          default:
            res = op2 - op1;
            break;
        }
        let returnIt = res; // appending , to indicate the ending of a number.
        stack2.push(returnIt); // adding / appending to the Answer Stack
      } else {
        stack2.push(tmp);
      }
    }
    if (stack2.length === 1 && !isNaN(stack2[0])) {
      return stack2[0];
    }
    return "wrong input>>>!";
  };

  calculate() {
    const postFixRes = this.infixToPostFix(this.expression);
    const result = this.postFixEval(postFixRes);
    if (result === "Infinity") {
      return "Wrong Input. not Divisible by Zero.";
    }
    return result; //this.postFixEval(postFixRes);
  }
}
