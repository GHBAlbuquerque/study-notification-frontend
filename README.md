# 📬 Notification System
### gila-notification-frontend

Hello!
This is my challenge for [Gila Software](https://www.gilasoftware.com/).

It is composed of a frontend application (this repo) and a backend interface ([link](https://github.com/GHBAlbuquerque/gila-notification-backend)).

## Description

This is the **frontend** for the Gila Notification system, built with **React**.  
It provides a simple UI to list and manage notifications.

Routes:
- '/' - Create Notification
- '/notifications' - List Notifications

Available Categories:
- Movies
- Finance
- Sports

Available Channels:
- SMS
- Push
- Email

---

## 🏛️ Architecture

```bash
📁 src
├── 📁 api         # Service class for API use
├── 📁 components  # Interface components
├── 📁 models      # Data representation
├── 📁 pages       # Main pages
├── 📁 routers     # Navigation logic
└── 📁 styles      # CSS and styling
```


---

## 🛠 Technology

- ⚛️ **React** (with TypeScript)
- 📦 **npm** for package management
- 💅 **CSS Modules** or global styles (under `/styles`)
- 🔁 **React Router** for navigation
- 🌱 **Vite**
- 🎲 **Lucide Icons**
- 🧰 **ESLint + Prettier** for code formatting and linting

---

## 🛠 UI

'/' - Create Notification
![Create Notification](misc/Create_Notification.png)

'/notifications' - List Notifications
![List Notifications](misc/List_Notifications.png)
---


## ▶️ How to Run

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v16+ recommended)
- npm (comes with Node)

---

### 🛠️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/gila-notification-frontend.git
cd gila-notification-frontend
```

Install dependencies:

```bash
npm install
```

### ▶️ Running the App

To start the development server:

```bash
npm run dev
```

---

Made with ☕  by @GHBAlbuquerque


