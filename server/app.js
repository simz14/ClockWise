const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/routes");
const { sequelize } = require("./database/connection");
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};
app.use(cors(corsOptions));

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
