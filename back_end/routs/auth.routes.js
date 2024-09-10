import express from "express";
import { login, logout, signup } from "../controller/auth.controller.js";

const route =  express.Router();

route.get("/signup", signup);
route.get("/login", login);
route.get("/logout", logout);

export default route;