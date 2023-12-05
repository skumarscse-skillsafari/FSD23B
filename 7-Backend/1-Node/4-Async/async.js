console.log("Start");

setTimeout(() => {
  console.log("SetTimeOut");
}, 0);

console.log("Middle");

const demoFun = function () {
  setTimeout(() => {
    console.log("demoFunction");
  }, 0);
};

const demo = (demoFun) => {
  console.log("Inside Function");
  demoFun();
};

demo(demoFun);

console.log("End");
