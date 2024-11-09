const express = require("express");
const dotenv = require("dotenv");
const appRouter = require("./src/routes/app.router");
const apiRouter = require("./src/routes/api.router");
const { dbConnection } = require("./src/config/firebase.config");

const app = express();
const PORT = process.env.SERVER_PORT || 3333;
dotenv.config();
app.use(express.json());

// Route prefixes

app.use("/", appRouter);
app.use("/api/", apiRouter);

// Database connection

dbConnection();
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
