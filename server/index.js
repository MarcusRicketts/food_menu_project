const connectDB = require("./startup/db");
const express = require("express");
const app = express();
const dishes = require("./routes/dishes");

connectDB();

app.use(express.json());
app.use("/api/dishes", dishes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
