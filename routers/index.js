import express from "express";
const router = express.Router();
import user from "./user/index.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가, 수정, 삭제, 조회
 */
router.use("/user", user);

export default router;