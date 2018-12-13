"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.set("port", 3000);
app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.listen(app.get("port"), () => {
    console.log("App is running on https://localhost:%d", app.get("port"));
});
//# sourceMappingURL=app.js.map