const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// GET /notes route
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET * (any other route)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
