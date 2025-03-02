# Crypto Dashboard

This is a **Crypto Dashboard** project built using **React, TypeScript, and Tailwind CSS**. It provides real-time cryptocurrency data, market statistics, price charts, and a responsive UI.

---

## 📌 Features

- **Live Crypto Market Data** – Fetches real-time market stats from the CoinGecko API.
- **Crypto Price Charts** – Displays historical price data using charts.
- **Mobile-Friendly Navigation** – Responsive **Sheet Drawer** for mobile menu.
- **Global API Handling** – Axios with interceptors for error handling.
- **Custom Hooks** – `useFetch` for fetching API data efficiently.
- **ShadCN UI Components** – Modern and clean UI components for better user experience.

---

## 🚀 Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, ShadCN UI
- **State Management**: React Hooks
- **API Handling**: Axios with interceptors
- **Charting**: Recharts

---

## 📂 Folder Structure

```
📦 crypto-dashboard
├── 📂 src
│   ├── 📂 assets         # for assets
│   ├── 📂 axios          # for axios interceptor config
│   ├── 📂 components     # Reusable UI components
│   ├── 📂 contant        # for all contant
│   ├── 📂 lib            # shadcn lib
│   ├── 📂 hooks          # Custom React hooks
│   ├── 📂 pages          # Application pages
│   ├── 📂 service        # for api server function
│   ├── 📂 types          # type
│   ├── 📄 App.tsx        # Main app file
│   ├── 📄 main.tsx       # React entry point
├── 📄 README.md          # Project documentation
├── 📄 package.json       # Dependencies and scripts
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dev-aman-7/dashboard.git
cd dashboard
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:5173** 🚀

---

## 📊 API Integration

This project uses the **CoinGecko API** to fetch cryptocurrency data. Make sure to check their documentation for rate limits and additional features.

---

## 📱 Responsive Design

- **Desktop**: Full dashboard view with charts & market data.
- **Mobile**: Sheet Drawer for navigation and a clean UI layout.

---

## 📌 To-Do (Future Enhancements)

- ✅ Improve chart UI with more historical data options.
- ✅ Add user authentication for a personalized experience.
- ✅ Implement dark mode for better accessibility.

---

## 📝 Notes

This project was given as an **assignment by a recruiter** and is built with best practices in mind. The goal was to showcase **React skills, API handling, and UI/UX improvements**.

For any questions, feel free to reach out! 🚀
