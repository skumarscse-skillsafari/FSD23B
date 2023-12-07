const express = require("express");
const app = express();
const PORT = 5000;

// Middleware => Function => Place inbetween Request - Response cycle
// Function => parameters => req, res, next()
// req <=> middleware <=> res
// const auth = (req, res, next) => {
//   console.log("Middleware Function");
//   req.auth = true;
//   next();
// };

// app.get("/", auth, (req, res) => {
//   console.log(req.auth);
//   res
//     .status(200)
//     .json({ success: true, message: "passed middleware condition" });
// });

// more than one middleware
// const middlewareOne = (req, res, next) => {
//   console.log("MiddlewareOne");
//   next();
// };

// const middlewareTwo = (req, res, next) => {
//   console.log("MiddlewareTwo");
//   next();
// };

// const middlewareThree = (req, res, next) => {
//   console.log("MiddlewareThree");
//   next();
// };

// // use() => add middlewares to a application
// // 3rd party middlewares => cors
// // apply middlewares mentioned below to all the routes
// app.use([middlewareOne]);

// app.get("/multimiddleware", middlewareTwo, (req, res) => {
//   res.status(200).json({ success: true, message: "multiple middlewares" });
// });

// app.get("/usemiddleware", middlewareThree, (req, res) => {
//   res.status(200).json({ success: true, message: "use middleware" });
// });

const authMiddleware = (req, res, next) => {
  if (req.query.username === "john") {
    next();
  } else {
    return res.status(400).json({ success: false, message: "auth failed" });
  }
};

app.get("/auth", authMiddleware, (req, res) => {
  const { username } = req.query;
  res.status(200).json({ success: true, message: `Welcome, ${username}` });
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
