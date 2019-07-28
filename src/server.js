import express from "express";
import { join } from "path";
const PORT = "4000";
const app = express();

app.use(express.static(join(__dirname, "..", "public/")));

// if you need api routes add them here
app.get("/api/getUsername", function(req, res, next) {
  res.send({ username: "a" });
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
