"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.set("port", 3000);
app.use(express_1.default.static("public"));
app.use(express_1.default.json({ limit: "1mb" }));
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.render("index", { error: "" });
});
app.post("/", (req, res) => {
    let name = req.body.name;
    let animal = req.body.animal;
    // console.log(req.body);
    if (name === "" || animal === "") {
        return res.render("index", {
            error: "alle velden moeten ingevuld worden",
        });
    }
    let randomNumber = Math.ceil(Math.random() * 5);
    res.render("animal", { name, animal, randomNumber });
});
app.listen(app.get("port"), () => {
    console.log(`Server is running on port http://localhost:${app.get("port")}`);
});
