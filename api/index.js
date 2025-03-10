//.env에 있는 api 정보를 process.env로 불러올수있게해주는 코드, 제일위에 위치
require("dotenv").config();

//필요한 라이브러리를 불러오기
//require - 이거가져와서쓸게!
const express = require("express"); // 웹서버에필요한 프레임워크
const axios = require("axios"); //api
const cors = require("cors"); // 프론트엔드가 서버에 요청보낼수있게 허용해주는 역할

//앱객체만들기 , 포트설정
const app = express(); //서버조직
const PORT = 3001; //포트번호

//api경로와 요청처리
app.use(cors()); //cross-origin resource sharing
//다른 도메인에서 서버에 접근할수있도록 허용, 프론트엔드가 서버접근가능
console.log("YOUTUBE_API_KEY:", process.env.YOUTUBE_API_KEY);

//경로만들기
//GET 요청처리하는 경로
// /popular은 내가만든 경로임
// async (req,res) 비동기요청처리 - await 사용가능하게함
app.get("/api/popular", async (req, res) => {
  try {
    const region = req.query.region || "AU";
    console.log(`requested region : ${region}`);
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          maxResults: 35,
          regionCode: region,
          key: process.env.YOUTUBE_API_KEY,
        },
      }
    );

    // 채널 정보 추가
    const videoItems = response.data.items;
    const channelPromises = videoItems.map((video) =>
      axios.get("https://www.googleapis.com/youtube/v3/channels", {
        params: {
          part: "snippet",
          id: video.snippet.channelId,
          key: process.env.YOUTUBE_API_KEY,
        },
      })
    );

    const channelResponses = await Promise.all(channelPromises);

    const videoWithChannel = videoItems.map((video, index) => ({
      ...video,
      channelName: channelResponses[index].data.items[0].snippet.title,
    }));

    res.json(videoWithChannel); // ✔️ 응답 여기에서 끝냄
  } catch (error) {
    console.error("youtube API call error:", error.message);
    res.status(500).json({ error: "fail to fetch the youtube data" });
  }
});
// 서버 실행
module.exports = app;
