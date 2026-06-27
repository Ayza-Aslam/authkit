const express = require("express");
const app = express();

const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

app.use(cors());
app.use(express.json());

app.use(authRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});