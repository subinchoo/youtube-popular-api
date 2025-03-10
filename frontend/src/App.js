import React, { useEffect, useState } from "react";
import "./App.css";

const countries = [
  { code: "AU", name: "Australia" },
  { code: "KR", name: "Korea" },
  { code: "US", name: "USA" },
  { code: "JP", name: "Japan" },
  { code: "GB", name: "UK" },
  { code: "CA", name: "Canada" },
  { code: "DE", name: "German" },
  { code: "FR", name: "France" },
  { code: "IN", name: "India" },
];

function App() {
  const [videos, setVideos] = useState([]);
  const [region, setRegion] = useState("AU"); //초기국가 - AU

  useEffect(() => {
    // 백엔드 서버의 popular API 요청
    fetch(`https://youtube-popular.vercel.app/popular?region=${region}`)
      .then((res) => res.json())
      .then((data) => setVideos(data))
      .catch((err) => console.error("API fetch error:", err));
  }, [region]); //국가 변경될때마다 새로요청

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>🔥 Popular Video in Youtube ▶️ ({region})</h1>
      </div>

      <div className="label">
        <label htmlFor="region">Select Region:</label>
        <select id="region" value={region} onChange={handleRegionChange}>
          {countries.map((country) => {
            return (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>

      {videos.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {videos.map((video, index) => (
            <li key={video.id} className="video-item">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <h2># {index + 1}</h2>
                <h3>{video.snippet.title}</h3>
              </a>
              <p>Views: {video.statistics.viewCount}</p>
              <p>Channel: {video.channelName}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
