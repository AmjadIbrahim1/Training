# 🚀 How to Run This Project (Simple Version)

## ⚡ Quick Start (3 Steps Only!)

### Step 1: Open Terminal
```bash
cd cyberpunk-tree-app
```

### Step 2: Install
```bash
npm install
```
⏳ This might take 2-3 minutes...

### Step 3: Run
```bash
npm run dev
```

### Step 4: Open Browser
Go to: **http://localhost:5173**

---

## 🎯 What You Should See

### Home Page (/)
- Welcome to Cyber Academy
- 4 cards: Level 0, Training Camp, Contests (with 🔥), Codeforces

### Level 0 Page (/level0)
- Click on "Level 0" card
- You'll see the tree with team members
- Hover over cards to see glow effects

---

## ❗ If Something Goes Wrong

### Problem: Tree not showing on Level 0 page?

**Check:**
1. Are you on the correct page? (URL should be `/level0`)
2. Open browser console (F12) - any red errors?
3. Try refreshing: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### Problem: CSS Import Error?

Already fixed in the latest files! Just:
```bash
# Delete and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Problem: Port 5173 already in use?

```bash
# Stop the server (Ctrl + C) then:
lsof -ti:5173 | xargs kill  # Mac/Linux
# OR restart your computer
```

---

## 📁 Project Structure

```
cyberpunk-tree-app/
├── src/
│   ├── pages/
│   │   ├── Landing/         ← Home page
│   │   └── Level0/          ← Tree page (the main one!)
│   ├── components/
│   │   ├── tree/            ← Tree components
│   │   └── landing/         ← Landing cards
│   └── data/
│       ├── treeData.js      ← Edit team members here
│       └── landingCards.js  ← Edit cards here
```

---

## 🎨 Want to Customize?

### Change Team Members:
Edit: `src/data/treeData.js`

### Change Colors:
Edit: `src/assets/styles/variables.css`
Look for:
```css
--primary: #00F5FF;    /* Cyan */
--secondary: #7C7CFF;  /* Purple */
--accent: #FF10F0;     /* Magenta */
```

### Add More Cards:
Edit: `src/data/landingCards.js`

---

## 🔥 Features

- ✨ Glassmorphism effects
- 🌈 Neon glow on hover
- 🎭 Smooth animations
- 📱 Fully responsive
- 🎯 Cyberpunk aesthetic

---

## 📝 Notes

- Node.js version 16+ required
- Works best on Chrome/Edge/Firefox
- Avatar images use fallback if not found
- All animations are GPU-accelerated

---

**Need more help?** Check `TROUBLESHOOTING.md` for detailed debugging steps.

---

Made with 💙 using React + Framer Motion + Vite
