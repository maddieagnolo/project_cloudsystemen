import express from "express";
import ejs from "ejs";

const app = express();

app.set("view engine", "ejs");
app.set("port", 3000);
app.use(express.static("public"));

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { error: "" });
});

app.post("/", (req, res) => {
  let name: string = req.body.name;
  let animal: string = req.body.animal;
  // console.log(req.body);
  if (name === "" || animal === "") {
    return res.render("index", {
      error: "alle velden moeten ingevuld worden",
    });
  }
  let randomNumber: number = Math.ceil(Math.random() * 5);
  res.render("animal", { name, animal, randomNumber });
});

app.listen(app.get("port"), () => {
  console.log(`Server is running on port http://localhost:${app.get("port")}`);
});
