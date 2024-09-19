import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const route =  express.Router();

route.post("/signup", signup);
route.post("/signin", login);
route.post("/logout", logout);  

export default route;