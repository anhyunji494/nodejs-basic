const morgan = require("morgan");
const require = require("request");
const express = require("express");
const app = express();

// 포트 설정
app.set("port", process.env.PORT || 8080);

// 공통 미들웨어
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우팅 설정
app.get("/naver/news", (req, res) => {
  const client_id = "발급받은 client id";
  const client_secret = "발급받은 client secret";
  const api_url =
    "https://openapi.naver.con/v1/search/news?query=" + encodeURI("코스피"); // encodeURI(req.query.query);

  const option = {};

  const options = {
    url: qpi_url,
    qs: option,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };

  request.get(options, error);
});
