import express from "express";
import register from "../controllers/auth.controller.js";
import validateRegister from "../middleware/validateRegister.js";

const router = express.Router();

router.post('/signup',validateRegister,register);

export default router