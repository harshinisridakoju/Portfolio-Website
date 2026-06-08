const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Personal portfolio built with HTML, CSS and JavaScript"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Weather application using API integration"
  },
  {
    id: 3,
    title: "Student Management System",
    description: "Java-based student record management system"
  }
];

app.get("/", (req, res) => {
  res.send("Portfolio Backend Running");
});

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://portfolioadmin:Harshii13@cluster0.1gyo5r9.mongodb.net/")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));