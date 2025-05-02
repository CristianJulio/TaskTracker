# TaskTrackr 🗂️

**TaskTrackr** is a fullstack task management application built with **React + TypeScript** on the frontend and **Node.js + Express** on the backend. It allows users to create, update, organize, and manage tasks efficiently.

---

## 🛠️ Tech Stack

**Frontend**
- React
- TypeScript
- Vite
- Axios
- TailwindCSS *(optional, if you're styling with it)*

**Backend**
- Node.js
- Express.js
- PostgreSQL (or MySQL)
- Prisma / Sequelize / Knex *(choose one ORM/Query Builder)*
- JWT Authentication

**DevOps**
- GitHub Actions (CI/CD)
- Docker *(optional later)*
- AWS *(deployment coming soon)*

---

## 📂 Project Structure

```
tasktrackr/
├── client/          # React App
└── server/          # Express API
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/tasktrackr.git
cd tasktrackr
```

### 2. Setup the Backend

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 3. Setup the Frontend

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

> Make sure your backend is running before you hit the frontend.

---

## 🧩 Features

- [x] User authentication (JWT)
- [x] Task CRUD
- [ ] Projects & labels *(coming soon)*
- [ ] Responsive design
- [ ] CI/CD with GitHub Actions
- [ ] AWS Deployment

---

## 🧪 Tests

> (To be implemented with Jest, Supertest, Vitest, etc.)

---

## 📌 Roadmap

- Day 1: Repo setup ✅
- Day 2: Build Express API & DB schema
- Day 3: Create basic React UI
- Day 4: Full CRUD + Auth
- Day 5–10: CI/CD, Testing, Deployment, TDD, Optimization

---

## 🤝 Contributing

If you'd like to contribute, feel free to fork the repo and submit a PR.

---

## 🪪 License

MIT © [Cristian Cantillo](https://github.com/CristianJulio)