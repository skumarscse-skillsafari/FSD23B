const path = require("path");
// console.log(__dirname);
// console.log(module);
// console.log(path.sep);

// path.join("") => create our own path
// /frontend/react/Usecontex.js => relative path
// console.log(path.join("/frontend", "/react", "/Usecontext.js"));

// path.resolve()
// console.log(path.resolve(__dirname, "frontend", "react", "Usecontext.js"));

// D:\SkillSafari\Batches\FSD23B\7-Backend\1-Node\3-Core-modules\2-Path\frontend\react\Usecontext.js
// D:\SkillSafari\Batches\FSD23B\7-Backend\1-Node\3-Core-modules\2-Path\frontend\react\Usecontext.js

console.log(__dirname);
console.log(path.basename(__dirname));
