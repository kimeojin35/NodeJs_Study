// 객체 리터럴
let sayNode = function () {
  console.log("Node");
};

let es = "ES";
let oldObject = {
  sayJS: function () {
    console.log("JS");
  },
  sayNode: sayNode,
};

oldObject[es + 6] = "Fantastic";
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

const newObject = {
  sayJS() {
    console.log("JS");
  },
  sayNode,
  [es + 6]: "Fantastic",
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);
