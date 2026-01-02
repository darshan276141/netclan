# 📊 Data Visualization Dashboard (Netclan Assignment)

A full-stack data visualization dashboard built using **React, Node.js, Express, and MongoDB**, designed to analyze and visualize insights data through interactive charts, KPIs, and filters.

---

## 🔗 Live Demo

* **Frontend (Vercel):**
  👉 [https://netclan.vercel.app/](https://netclan.vercel.app/)

* **Backend API (Render):**
  👉 [https://netclan-76u1.onrender.com/api/insights](https://netclan-76u1.onrender.com/api/insights)

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Chart.js & react-chartjs-2
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

### Deployment

* Frontend: **Vercel**
* Backend: **Render**
* Database: **MongoDB Atlas**

---

## ✨ Features

* 📌 **KPI Cards**

  * Total Insights
  * Average Intensity
  * Average Likelihood
  * Average Relevance

* 📊 **Interactive Charts**

  * Bar Chart with dynamic filters
  * Bubble Chart for multi-dimensional analysis

* 🎯 **Dynamic Filtering**

  * Filter insights by topic, region, year, etc.

* 📱 **Responsive Design**

  * Works seamlessly across desktop and mobile devices

* 🔌 **API-Driven Architecture**

  * Real-time data fetched from backend APIs

---

## 📂 Project Structure

```
root
├── backend
│   ├── src
│   │   ├── models
│   │   ├── routes
│   │   ├── controllers
│   │   └── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Local Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone <your-github-repo-url>
cd <repo-name>
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

Run backend:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## 🚀 Deployment

* **Backend** deployed on Render with environment variables for MongoDB Atlas
* **Frontend** deployed on Vercel with backend API integration

Both services are fully production-ready.

---

## 🧠 Key Learnings

* Full-stack application architecture
* API development and consumption
* MongoDB Atlas integration
* Data visualization using Chart.js
* Production deployment and environment management

---

## ✅ Status

✔ All features implemented
✔ Backend and frontend deployed
✔ Live data visualization working


