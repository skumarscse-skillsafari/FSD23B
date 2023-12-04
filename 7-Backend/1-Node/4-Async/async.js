console.log("Start");

setTimeout(() => {
  console.log("SetTimeOut");
}, 0);

console.log("Middle");

const demoFun = function () {
  console.log("demoFunction");
};

const demo = async (demoFun) => {
  console.log("Inside Function");
  await demoFun();
};

demo(demoFun);

console.log("End");
