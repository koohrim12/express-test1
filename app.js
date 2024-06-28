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
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// POST 요청 처리
app.post("/submit", (req, res) => {
  const inputContent = req.body.inputContent;
  console.log("입력 내용:", inputContent);
  // 입력된 내용을 JSON 형태로 클라이언트에 전송
  res.json({ inputContent });
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);
});
