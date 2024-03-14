import express from "express";
const router = express.Router();
import user from "./user/index.js";
import board from "./board/index.js";

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가, 수정, 삭제, 조회
 */
router.use("/user", user);

/**
 * @swagger
 * tags:
 *   name: Board
 *   description: 게시물 추가, 수정, 삭제, 조회
 */
router.use("/board", board);

export default router;