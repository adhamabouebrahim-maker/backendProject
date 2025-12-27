const express = require("express");
const cors = require("cors");

const courseRoutes = require("https://student-new-frontend.onrender.com");
const gradeRoutes = require("https://student-new-frontend.onrender.com");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/courses", courseRoutes);
app.use("/api/grades", gradeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
