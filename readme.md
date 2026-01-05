# 🏢 Office Floor Seating Plan (Frontend + Google Sheets)

A **frontend-only office seating layout system** inspired by **airline seat booking UIs**, where:

- Seats are shown in **different Types (A / B / C)**
- Employee details appear **on hover**
- Seating data is managed from **Google Sheets**
- The site is hosted **free on GitHub Pages**
- No backend or database is required

---

## ✨ Features

- 🔹 **Dynamic seat generation** (no hardcoded seats)
- 🔹 **Three seat types with different sizes**
  - **A-type** → Cabin (largest)
  - **B-type** → Big cubicle (medium)
  - **C-type** → Small cubicle (compact)
- 🔹 **Airline-style grid layout**
- 🔹 **Hover tooltip** showing employee details
- 🔹 **Mobile responsive**
- 🔹 **HR-friendly** (update seats via Google Sheet)

---

## 🧱 Tech Stack

| Layer | Technology |
|----|----|
Frontend | HTML, CSS Grid, Vanilla JavaScript |
Data source | Google Sheets (CSV publish) |
Hosting | GitHub Pages |
Backend | ❌ None |

---

## 📂 Project Structure

office-floor-seating/
├── index.html # Main page
├── style.css # Layout & seat design
├── script.js # Google Sheet integration
└── README.md


---

## 📊 Data Source (Google Sheet)

The seating and employee data comes from a **public Google Sheet**.

### 🔗 Google Sheet Link
👉 **Replace this with your actual sheet link before sharing**

### for demo github pages Google Sheet Link 
https://docs.google.com/spreadsheets/d/e/2PACX-1vSlPbhaTHuBVIhZGhJubSSy_L02DwUAp0jC_rRUrZiMxmVPiXenOqN-pe0lLZyk4y4hvMOaiKGVx21s/pub?output=csv


### 📑 Sheet Columns (Must Match)

| Column name | Description |
|-----------|-------------|
| seat_id | Seat identifier (A1, B2, C3, etc.) |
| row | Grid row start position |
| col | Grid column start position |
| emp_name | Employee name |
| designation | Job title |
| department | Department name |
| email | Employee email |
| Empty | Use `Empty` for vacant seats |

### 🔠 Seat Type Rules

Seat type is derived from **seat_id**:

| Prefix | Type | Size |
|------|------|------|
| `A#` | Cabin | Large |
| `B#` | Big cubicle | Medium |
| `C#` | Small cubicle | Small |

No extra column is required for seat type.

---

## ⚙️ How It Works

1. `script.js` fetches the Google Sheet as **CSV**
2. Each row is converted into a seat `<div>`
3. Seat type is inferred from `seat_id`
4. CSS Grid `span` rules control the size
5. Tooltip shows employee info on hover

---

## 🚀 Live Demo (GitHub Pages)

Once GitHub Pages is enabled, the site will be available at:

https://prasanth22.github.io/Floor-Seating-Plan/

---

## 🛠️ Setup & Deployment

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<your-username>/office-floor-seating.git
cd office-floor-seating

2️⃣ Update Google Sheet URL

Edit script.js:

const sheetURL = "YOUR_PUBLISHED_GOOGLE_SHEET_CSV_URL";

3️⃣ Push to GitHub
git add .
git commit -m "Initial office seating layout"
git push

4️⃣ Enable GitHub Pages

Go to Settings → Pages

Branch: main

Folder: /root

📱 Responsive Design

Desktop: Dense airline-style grid

Tablet: Auto-resized grid

Mobile: Stacked layout with readable seats

🔒 Security & Access

No authentication required

No sensitive data should be stored

🧠 Future Enhancements (Optional)

Seat search by employee name

Multi-floor navigation

Admin drag-and-drop layout

SVG floor blueprint overlay

📄 License

This project is free to use and modify for internal or educational purposes.

👤 Author

Built as a frontend-only office visualization project using modern CSS Grid techniques and Google Sheets as a lightweight data source.
