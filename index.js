const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
const apiData = require("./data.json");

app.get("/", (req, res) => {
    res.send("Hello, I am live!");
});

app.get("/service", (req, res) => {
    res.json(apiData); // Sending apiData as JSON response
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
