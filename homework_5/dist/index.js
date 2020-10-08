"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const nunjucks_1 = __importDefault(require("nunjucks"));
const app = express_1.default();
const port = 8080;
// View directories
const viewDir = path_1.default.join("homework_5", "public", "views");
// Serve housekeeping
app.set("view engine", "html");
app.use(express_1.default.static(path_1.default.join("homework_5", "public")));
// Configure nunjucks
nunjucks_1.default.configure(viewDir, {
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
//# sourceMappingURL=index.js.map