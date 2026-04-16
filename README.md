# 👥 KeenKeeper

## 📌 Overview

KeenKeeper is a modern friendship tracking web application built with **Next.js (App Router)**. It helps users maintain meaningful relationships by tracking interactions, setting communication goals, and visualizing engagement patterns over time.

---

## 🚀 Live Demo

🔗 https://your-live-link.vercel.app
🔗 https://github.com/jahidhasan-webdev01/keen-keeper

---

## 🛠️ Tech Stack

* ⚡ Next.js (App Router)
* 🎨 Tailwind CSS + DaisyUI
* 📊 Recharts
* 🔄 Context API (Global State Management)
* 🔔 React Hot Toast

---

## ✨ Features

### 👫 Friend Management

* Display friends from a local JSON data source
* Fully responsive card grid (mobile → tablet → desktop)
* Status-based UI (overdue / almost due / on-track)
* Click any friend card to view detailed profile

---

### 👤 Friend Details Page

* Clean two-column responsive layout

* Displays:

  * Profile image, name, tags
  * Bio and email
  * Status with dynamic color indicator

* Action buttons (UI only):

  * ⏰ Snooze
  * 📦 Archive
  * 🗑️ Delete

---

### ⚡ Quick Check-In (Core Feature)

* Instantly log interactions:

  * 📞 Call
  * 💬 Text
  * 🎥 Video

* On click:

  * Adds a new timeline entry
  * Saves data in **Context API + LocalStorage**
  * Displays a real-time toast notification

---

### 📜 Timeline System

* View complete interaction history

* Each entry includes:

  * 📅 Date
  * 🔣 Interaction type (Call / Text / Video)
  * 📝 Title (e.g., "Call with Alex")

* Advanced features:

  * 🔍 Filter by interaction type
  * 🔎 Search by friend name or interaction type
  * ↕️ Sort by newest or oldest

---

### 📊 Friendship Analytics (Stats Page)

* Built with **Recharts**
* Interactive Pie Chart displaying:

  * 📞 Call count
  * 💬 Text count
  * 🎥 Video count

---

## ⚙️ Additional Functionalities

* ⏳ Loading spinner while fetching friend data
* ❌ Custom 404 page (`not-found.jsx`) for invalid routes
* 🔄 Seamless page reload without errors (Next.js routing)
* 📱 Fully responsive design across all devices
* 🎯 Pixel-perfect UI based on Figma design

---

## 🧠 Core Logic

* Friend data is stored in a local JSON file
* Timeline interactions are managed globally using Context API
* Data is persisted using LocalStorage for state retention
* Quick Check-In actions dynamically update both timeline and analytics
* Stats page calculates interaction distribution from stored timeline data
