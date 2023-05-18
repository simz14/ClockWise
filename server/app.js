const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const { sequelize } = require("./database/connection");
const PORT = process.env.PORT || 5000;

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
