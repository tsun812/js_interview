const findClosing = function (word, indexStart) {
  const myArr = word.split("");
  let counter = 0;
  console.log(myArr)
  for (let i = indexStart; i < myArr.length; i++) {
    if (myArr[i] === "(") {
    counter += 1;
    }
    if (myArr[i] === ")") {
      counter -= 1;
      if(counter === 0 && i !== indexStart) {
        return i;
      }
    }
  }
}
console.log(findClosing("hello(asdf)", 5));