import express from "express";
import { swaggerUi, specs } from '../swagger/swagger.js';
import api from "../routers/index.js";

const server = express();
const port = 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use("/api", api)
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

/**
 * 파라미터 변수 뜻
 * req : request 요청
 * res : response 응답
 */

/**
 * @path {GET} http://localhost:8000/
 * @description 요청 데이터 값이 없고 반환 값이 있는 GET Method
 */

server.get("/", (req, res) => {
  // Hello World 데이터 반환
  res.send("Hello World");
});

// http listen port 생성 서버 실행
server.listen(port, () => console.log(`${port}번 server open`));
