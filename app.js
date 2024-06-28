// Express 모듈 및 path 모듈 불러오기
// const express = require("express");
// const path = require("path");

// // Express 애플리케이션 생성
// const app = express();
// const port = 3000;

// // 정적 파일 제공 설정
// app.use(express.static(path.join(__dirname, "public")));

// // 루트 경로에 대한 GET 요청 처리
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public/test.html"));
// });

// // 서버 시작
// app.listen(port, () => {
//   console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
// });

// ===================================================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// body-parser 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: false }));

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, "public")));

// 루트 경로에 대한 GET 요청 처리
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/test.html"));
});

// POST 요청 처리
app.post("/submit", (req, res) => {
  const inputContent = req.body.inputContent;
  console.log("입력 내용:", inputContent);
  res.send("데이터를 성공적으로 받았습니다.");
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});
