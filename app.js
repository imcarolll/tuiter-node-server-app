import express from 'express';
import HelloController from './controllers/hello-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import UserController from './users/users-controller.js';
import session from "express-session";
import cors from 'cors';
import AuthController from "./users/auth-controller.js";
import mongoose from "mongoose";

const app = express()
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
);   
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000",
  }
 ))
app.use(express.json())
app.listen(process.env.PORT || 4000)
HelloController(app)
UserController(app)
TuitsController(app)
AuthController(app)


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/tuiter"
//const CONNECTION_STRING = "mongodb://127.0.0.1:27017/tuiter"
mongoose.connect(CONNECTION_STRING);