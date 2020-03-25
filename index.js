const express = require("express");

const app = express();

app.get("/", () => "aaa");

app.listen(3333);
