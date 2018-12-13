import * as express from "express";

const app = express();
app.set("port", 3000);

app.get('/', (req: any, res: any) => {
    res.send("Hello world!");
});

app.listen(app.get("port"), () => {
    console.log("App is running on https://localhost:%d", app.get("port"));
});