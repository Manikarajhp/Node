# 🧑‍💼 Job Portal Application (MERN Stack)

A **full-stack Job Portal application** where users can search and apply for jobs, and companies can post jobs and manage applicants.
Built using **React (Vite), Node.js, Express, MongoDB, and Bootstrap 5**.

---

## 🚀 Features

### 👤 User

* Register & Login (JWT Authentication)
* Search jobs by **role, location, salary**
* View job details
* Apply / Enroll for jobs
* User dashboard

### 🏢 Company

* Company registration & login
* Post new jobs
* View posted jobs
* View applicants for each job

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control (User / Company)
* Protected routes (frontend & backend)

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Bootstrap 5
* Axios
* React Router DOM
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Tokens)
* bcrypt.js

---

## 📂 Project Structure

### Backend

```
backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── server.js
```

### Frontend

```
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── context/
│   ├── App.jsx
│   ├── main.jsx
```

---

## 📸 Screenshots

> *(Add screenshots here)*

### 🏠 Home Page
<img width="1081" height="780" alt="image" src="https://github.com/user-attachments/assets/9bb9720a-f791-480e-bd4f-f71547e2f8de" />

### 🔍 Job Search
<img width="1660" height="863" alt="image" src="https://github.com/user-attachments/assets/37542996-8a29-4501-aeaf-6bf2eb9be3fd" />

### 📝 Applicants (Company)
<img width="1660" height="863" alt="image" src="https://github.com/user-attachments/assets/f0491075-8195-4a04-8747-fb22a33c54e3" />

### 👤 User Dashboard
<img width="1660" height="1065" alt="image" src="https://github.com/user-attachments/assets/8a22bf2a-4bcc-4644-a93e-814d07fabed2" />

---

## ⚙️ Environment Variables

Create a `.env` file in **backend** folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## ▶️ Run the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/job-portal.git
cd job-portal
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔍 Search & Filter Logic

* Jobs are fetched once from backend
* Filtering is done on frontend using JavaScript `.filter()`
* Case-insensitive keyword matching using `.includes()`

---

## 🧠 Interview Highlights

* JWT Authentication & Role-based Authorization
* Protected Routes in React
* RESTful API design
* Clean folder structure (industry standard)
* MERN Stack end-to-end integration

---

## 🔮 Future Enhancements

* Job bookmarking
* Pagination & infinite scroll
* Admin dashboard
* Advanced filters (skills, experience)

---

## 👨‍💻 Author

**Manika Raj**
Full Stack Developer (MERN)

📧 Email: *[Manikaraj](manikaraj480@gmail.com)*
