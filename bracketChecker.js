//brackets, parenthesis, braces validator O(n) time and space

const bracketChecker = function (String1) {
  let open = -1;

  if (String1.length === 0 || String1.length === 1) return false;
  console.log(String1.length);
  for (let i = 0; i < String1.length; i++) {
    console.log(String1[i]);
    if (String1[i] === "[" || String1[i] === "{" || String1[i] === "(") {
      open = i;
    }
    //A closer is valid if and only if it's the closer for the most recently seen, unclosed opener.
    else if (
      (String1[open] === "{" && String1[i] === "}") ||
      (String1[open] === "(" && String1[i] === ")") ||
      (String1[open] === "[" && String1[i] === "]")
    ) {
      open--;
    } else return false;
  }
  if (open === -1) {
    return true;
  } else return false;
};
console.log(bracketChecker("{{}"));


//stack, array's push and pop methods. Use Set's has method instead of multiple Or