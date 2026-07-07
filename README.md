# Binary Search & Sorting Academy 🎓

Welcome to the **Binary Search & Sorting Academy**! This is an interactive, premium single-page web application designed to help students, developers, and job seekers master fundamental search and sort algorithms. 

The website offers detailed study guides, complexity tables, step-by-step interactive simulators, and a knowledge check quiz, fully localized in both **English** and **Bengali (বাংলা)**.

---

## 🌟 Key Features

### 🔍 1. Interactive Searching Visualizer
- Supports **Linear Search** and **Binary Search** via a tabbed interface.
- **Linear Search:** Simulates index-by-index checks, highlighting the active cell with a distinctive purple/pink gradient (`.checking`) and the found element in green.
- **Binary Search:** Dynamically adjusts the search boundaries (`low` and `high` pointers) in real-time, showing the calculated `mid` pointer and narrowing search space visually without visual desynchronization.
- **Input Autofilter:** Sorts inputs automatically for Binary Search, while preserving the unsorted order for Linear Search.

### 📊 2. Interactive Sorting Visualizer
- Supports **Bubble Sort**, **Selection Sort**, and **Insertion Sort**.
- Shows active comparison indexes (`activeA` and `activeB` classes) with custom color indicators.
- **Step History Log:** Records a detailed timestamped log of each swap, comparison, or pass completed.
- **Run Full Mode:** Features automated playback to visualize the sort sorting sequence from start to finish.

### 📝 3. Fully Localized Study Content
- Features definitions, step-by-step instructions, pre-conditions, complexity analysis (best, average, worst cases), dry runs, common mistakes, and real-world examples.
- Centralized translation dictionary allows a smooth single-button transition between **English** and **Bengali (বাংলা)**.

### ⏱️ 4. Comprehensive Knowledge Check Quiz
- Includes **23 high-quality questions** testing concepts on searching, sorting, stability, and time/space complexities.
- Integrates a **20-second countdown timer** per question with visual alerts.
- Features **Skip Question** and **Reset Quiz** options.
- Generates a detailed post-quiz **Result Scorecard** showing percentages, correct/wrong counts, and a question-by-question answer key breakdown.

---

## 🛠️ Technology Stack

- **Structure:** Semantic HTML5
- **Styling:** Custom Vanilla CSS3 (utilizing modern CSS variables, responsive grid/flexbox layouts, glassmorphic card panels, and smooth transitions)
- **Logic:** Vanilla ES6+ JavaScript (implemented using state machines to drive step-by-step visualizers without page freezes)

---

## 📂 Project Structure

```bash
binary-sorting-academy/
├── index.html       # Main structure, content cards, visualizer panels, and quiz
├── styles.css       # Core design tokens, gradients, variables, and responsive layout
├── script.js        # Algorithm step machines, translation dictionary, and quiz engine
├── favicon.svg      # Page browser icon
└── README.md        # Documentation (this file)
```

---

## 🚀 How to Run Locally

Since this is a client-side application built with vanilla web technologies, you can run it easily:

### Option A: Direct Open
Simply double-click the `index.html` file to open it directly in your web browser.

### Option B: Local Server (Recommended)
To ensure smooth asset loading and layout consistency, run a simple local development server:

**Using Python:**
```bash
python3 -m http.server 8080
```
Then open your browser and navigate to `http://localhost:8080`.

---

## ✍️ Author
Designed & Developed by **Ta-syn**.
