import express from "express";
import protectRout from "../midleware/protectRout.js";
import { getUserForSideBar } from "../controller/user.controller.js";

const router = express.Router();

router.get("/", protectRout, getUserForSideBar);

export default router;  