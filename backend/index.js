const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://devricks:!QAZ1qaz@cluster0.wki8r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Could not connect to MongoDB. ERROR: ${err}`));
