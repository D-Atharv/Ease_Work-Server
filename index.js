const express = require("express");

const app = express();

const PORT = 3000;

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));