# 📚 BOOK TOO

A full-stack book management web app built with the **MERN stack**. Users can sign up, log in, and manage their own personal book collection. Each user only sees the books they added.

## ✨ Features

- **User authentication**: signup, login and logout using JWT stored in an HTTP-only cookie
- **Password security**: passwords are hashed with bcrypt before being saved
- **Welcome page**: greets the user with their name fetched from MongoDB
- **Add books**: name, author, price and publish date
- **View books**: books are loaded from the database and shown in a table
- **Delete books**: remove a book from your collection
- **User-wise data**: every book is linked to its owner, so users only see their own books
- **Protected API**: backend routes are guarded by a `verifyUser` middleware
- **Private routes**: frontend pages are inaccessible without logging in
- **Custom 404 page**: shown for any unknown URL
- **Responsive UI**: dark and yellow theme

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite), React Router, Axios |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT, bcrypt, cookie-parser |
| Other | CORS |

## 📁 Pages

| Route | Access | Description |
|---|---|---|
| `/signup` | Public | Create a new account |
| `/login` | Public | Log in to your account |
| `/home` | Private | Welcome page with the user's name |
| `/dashboard` | Private | Add, view and delete books |
| `*` | Public | 404 page |

## 🔌 API Endpoints

| Method | Endpoint | Protected | Description |
|---|---|---|---|
| POST | `/signup` | No | Register a new user |
| POST | `/login` | No | Log in and receive a token cookie |
| POST | `/logout` | No | Clear the token cookie |
| GET | `/home` | Yes | Get the logged-in user's name and email |
| POST | `/addbook` | Yes | Add a new book |
| GET | `/books` | Yes | Get all books of the logged-in user |
| DELETE | `/delete/:id` | Yes | Delete a book (owner only) |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) running locally on port `27017`

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Set up the backend

```bash
cd backend
npm install
node server.js
```

The server runs on **http://localhost:3500** and connects to the database `Booklogin`.

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs on **http://localhost:5173**.

## 🔐 How Authentication Works

1. The user logs in and the server creates a JWT token.
2. The token is stored in an HTTP-only cookie.
3. The browser sends the cookie with every request (`withCredentials: true`).
4. The `verifyUser` middleware checks the token and allows or blocks the request (`401 Unauthorized`).
5. On the frontend, the `Private` component calls a protected API and redirects to `/login` if the user is not authenticated.

## 🔮 Future Improvements

- Update/edit a book (form or modal)
- Book cover image upload (multer)
- Search and filter books
- Move secrets (JWT key, DB URL) to a `.env` file
- Input validation on signup and the book form
- Deploy the app (Vercel + Render + MongoDB Atlas)

- ##images
- <img width="615" height="796" alt="Screenshot 2026-11-12 193112" src="https://github.com/user-attachments/assets/933df717-6e39-4753-8dd1-9b9bebc2c3b8" />
<img width="516" height="730" alt="Screenshot 2026-11-12 193125" src="https://github.com/user-attachments/assets/9aa1efe2-d655-43d1-afa5-bbe3e72e5294" />
<img width="1757" height="825" alt="Screenshot 2026-11-12 194801" src="https://github.com/user-attachments/assets/0971b9dc-1eec-4d7a-b456-ca2a03c151bf" />
<img width="1750" height="817" alt="Screenshot 2026-11-12 194822" src="https://github.com/user-attachments/assets/493c69ab-d5a9-4cc0-ae47-5b2c37911848" />


