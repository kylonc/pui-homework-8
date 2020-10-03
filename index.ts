import express, { Express } from "express";
import path from "path";

const app: Express = express();
const port: number = 8080;

// Serve housekeeping
app.set("views", path.join(__dirname, "views"));

// Initialize server
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Listening on port ", port);

});

