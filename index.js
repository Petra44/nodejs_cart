import express from "express";
import pageRoutes from "./routes/pageRoutes.js";
import actionRoutes from "./routes/actionRoutes.js";
import { ValidationError } from "express-validation";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("public"));
app.use(express.json());

app.use(pageRoutes);
app.use(actionRoutes);

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    const errorVal = err?.details?.body?.map((error) => error.message);

    return res.status(err.statusCode).json(errorVal);
  }
  return res.status(500).json(err);
});

app.listen(PORT, () => console.log(`Serveris running @ port ${PORT} 🚀`));
