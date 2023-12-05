const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("./Course-Website"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Course Website Demo</h1>");
});

app.get("*", (req, res) => {
  res.status(400).send(`
        <h1>Page not found</h1>
        <a href="/">Back to home page</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
