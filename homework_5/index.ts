import express, { Express } from "express";
import path from "path";
import nunjucks from "nunjucks";

const app: Express = express();
const port: number = 8080;

// View directories
const viewDir = path.join("homework_5", "public", "views");

// Serve housekeeping
app.set("view engine", "html")
app.use(express.static(path.join("homework_5", "public")))

// Configure nunjucks
nunjucks.configure(viewDir, {
    express: app
});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/:route", (req, res) => {
    res.render(`${req.params.route}`);
});

// Initialize Server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Listening on port ", port);
});

