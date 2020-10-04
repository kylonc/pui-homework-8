import express, { Express } from "express";
import path from "path";
import nunjucks from "nunjucks";

const app: Express = express();
const port: number = 8080;

// Serve housekeeping
app.set("views", path.join("public", "views"));
app.set("view engine", "html")
app.use(express.static("public"))

// Configure nunjucks
nunjucks.configure(app.get("views"), {
    express: app
});

// Initialize server
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/:route", (req, res) => {
    res.render(req.params.route);
});

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log("Listening on port ", port);
});

