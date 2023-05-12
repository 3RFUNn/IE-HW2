import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import {config} from "dotenv";
import {usersRouter} from "./routes/users.js";
import {authRouter} from "./routes/auth.js";
import {courseRouter} from "./routes/courses.js";
import swaggerUI from "swagger-ui-express";
// import swaggerJsDoc from "swagger-jsdoc";
import swaggerDoc from "./swagger.json" assert {type: "json"};

config({path: "./.env"});

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(".", "public")));