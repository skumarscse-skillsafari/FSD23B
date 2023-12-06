const express = require("express");
const app = express();
const PORT = 5000;

// http methods => get, post, put, patch, delete
// app.httpMethod("path", (req, res) => {...})
// app.get()
// app.post()
// app.put()
// app.patch()
// app.delete()
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).json({ success: true, message: "About page" });
});

app.get("/projects", (req, res) => {
  res.status(200).send("Projects Page");
});

app.get("*", (req, res) => {
  res.status(400).send(`
        <h1>Page not found</h1>
        <a href="/">Back to home page</a>
    `);
});

app.listen(PORT, () => {
  console.log(`Server is running in: http://localhost:${PORT}`);
});
