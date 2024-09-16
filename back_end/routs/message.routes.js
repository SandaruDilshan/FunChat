import express from "express";
import { sendMessage } from "../controller/message.controller.js";
import protectRout from "../midleware/protectRout.js";

const router = express.Router();

router.post("/send/:id", protectRout, sendMessage); // First check protect rout function isuser log 
router.get("/:id", protectRout, getdMessage); // First check protect rout function isuser log 


export default router;