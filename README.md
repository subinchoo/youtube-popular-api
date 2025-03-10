
# 🎬 YouTube Popular Videos Viewer

🔥 A web application that fetches and displays the most popular YouTube videos by region. Built with **React (Frontend)** and **Node.js (Backend, Express API)**, deployed using **Vercel**.

## 🌍 Live Demo
🔗 [YouTube Popular Videos Viewer](https://youtube-popular-frontend.vercel.app)

## 🛠 Tech Stack
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js
- **API:** YouTube Data API v3
- **Deployment:** Vercel (Frontend & Backend)

## ✨ Features
- 🔎 **View trending YouTube videos** for different countries
- 🌍 **Filter by region** (Australia, Korea, USA, Japan, UK, etc.)
- 🎥 **Click on videos to watch directly on YouTube**
- 📊 **Displays view count & channel name**
- 📱 **Responsive Design** for mobile and desktop

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/youtube-popular-videos.git
cd youtube-popular-videos
```

### **2️⃣ Backend Setup**
```sh
cd youtube-popular
npm install
```
- Create a `.env` file and add your **YouTube API key**:
```sh
YOUTUBE_API_KEY=your_api_key_here
```
- Run the server locally:
```sh
node server.js
```
- API will be available at:  
  `http://localhost:3001/api/popular`

### **3️⃣ Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```
- Open the app in your browser:  
  `http://localhost:3000`

## 🔥 API Endpoint
- **GET /api/popular?region=AU**
- Fetches the most popular videos in the specified region.

## 🎯 Deployment with Vercel
Both frontend and backend are deployed on **Vercel**.  

### **1️⃣ Backend Deployment**
```sh
cd youtube-popular
vercel --prod
```
### **2️⃣ Frontend Deployment**
```sh
cd ../frontend
vercel --prod
```
- Make sure the frontend fetches data from your deployed backend URL.

## 📬 Contact
Feel free to connect with me on **[LinkedIn](https://www.linkedin.com/in/subinchoo0514)/** or check out my other projects on Github🚀
```
