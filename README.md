

# 🌍 Louder World – Sydney Events Web App

>  Web Scraping & Event Listing
> A full-stack web application that **automatically scrapes events in Sydney** and displays them in a clean, user-friendly interface.

---

## 🔗 Live Demo

👉 [Click here to visit the live site](https://nandsydneyevent.netlify.app/)

---

## 📌 Objective

This project was built as part of a web development assignment to:

* Create a live, dynamic **event listing web page** for **Sydney, Australia**
* **Scrape** event data from public event platforms
* Automatically **update** the events in real time
* Include a **"GET TICKETS"** button with **email opt-in**
* Use **open-source tools** and optionally **AI-based tech**

---

## 🛠️ Tech Stack

| Frontend                  | Backend                                  | Scraping                              | State Management  |
| ------------------------- | ---------------------------------------- | ------------------------------------- | ----------------- |
| React + TypeScript + Vite | Node.js + Express                        | Cheerio + Axios *(for mock data now)* | React Context API |

---

## 📂 Folder Structure (Key Files)

```bash
Louder-world-Assign/
├── public/                   # Static assets
└── src/
    ├── components/           # Reusable components
    │   ├── events/           # Event cards & list
    │   ├── home/             # Hero/banner components
    │   ├── layout/           # Layout structure
    │   └── ui/               # UI elements (buttons, modals, etc.)
    ├── context/              # React Context API for global state
    │   ├── EventContext.tsx
    │   └── ModalContext.tsx
    ├── data/
    │   └── mockEvents.ts     # Mock event data (replaceable with live-scraped data)
    ├── pages/                # App pages (routes)
    │   ├── AboutPage.tsx
    │   ├── ContactPage.tsx
    │   ├── EventPage.tsx
    │   └── HomePage.tsx
    ├── types/
    │   └── event.ts          # TypeScript types
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/nandkumar1000/Louder-world-Assign.git
cd Louder-world-Assign

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 💡 Features

* 🔍 **Dynamic Event Listing** from Sydney (currently mocked)
* 📧 **Email Opt-In Modal** before redirecting to ticket source
* ✨ **Beautiful UI** using React Components and Layouts
* 🧠 Modular design with **TypeScript** and **Context API**
* 📁 **Easily extendable** to integrate backend scraping & live updates

---

## 🧠 Future Enhancements

* 🔄 Live server-side scraping with Express + Cheerio
* 📬 Integration with email marketing tools (Mailchimp, etc.)
* 🌐 Pagination, filtering by date or category
* 🔒 Form validation & email confirmation

---

## 📃 License

This project is open-sourced under the [MIT License](LICENSE).

---

## 🙌 Author

* 💻 Built by [Nand Kumar Sahu](https://github.com/nandkumar1000)

---


