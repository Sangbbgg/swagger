import swaggerUi from "swagger-ui-express"
import swaggereJsdoc from "swagger-jsdoc"

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger API",
      description:
        "프로젝트 설명 Node.js Swaager swagger-jsdoc 방식 RestFul API 클라이언트 UI",
    },
    servers: [
      {
        url: "http://localhost:8000",
        description: "local Server"
      }
    ],
  },
  apis: ["./routers/*.js", "./routers/user/*.js","./routers/board/*.js"] //Swagger 파일 연동
}
const specs = swaggereJsdoc(options)

export { swaggerUi, specs }