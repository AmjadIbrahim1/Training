# 🎯 Al-Qady Training Platform | منصة تدريب القاضي

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> A modern, interactive platform for competitive programming training and education, designed specifically for Arabic-speaking students.

![Al-Qady Training](https://img.shields.io/badge/Arabic-Friendly-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## ✨ Features

### 🎨 **Modern UI/UX**
- **Glassmorphism Design** - Beautiful frosted glass effects
- **Neon Glow Effects** - Eye-catching cyberpunk aesthetics
- **Smooth Animations** - Powered by Framer Motion
- **Fully Responsive** - Works perfectly on all devices

### 📚 **Educational Content**
- **Level 0 Training** - Comprehensive beginner-friendly courses
- **Problem Solving Guides** - Step-by-step methodology
- **Codeforces Integration** - Direct links to practice sheets
- **Quizzes & Contests** - Test your knowledge
- **ECPC Preparation** - Egyptian Collegiate Programming Contest resources

### 🤝 **Community Features**
- **Team Structure** - Visual hierarchy of mentors and students
- **Group Links** - Easy access to Telegram and Facebook communities
- **Progress Tracking** - Monitor your learning journey
- **Islamic Reminders** - Athkar notifications throughout the day

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/alkady-training.git

# Navigate to project directory
cd alkady-training

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser at http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 📂 Project Structure

```
alkady-training/
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, styles, fonts
│   │   ├── images/          # Avatar images
│   │   └── styles/          # Global CSS variables
│   ├── components/          # Reusable components
│   │   ├── athkar/         # Islamic reminders
│   │   ├── landing/        # Landing page cards
│   │   └── tree/           # Team hierarchy
│   ├── data/               # Data files
│   │   ├── landingCards.js
│   │   ├── treeData.js
│   │   ├── level0Data.js
│   │   └── ...
│   ├── pages/              # Route pages
│   │   ├── Landing/
│   │   ├── Level0/
│   │   ├── Contests/
│   │   └── ...
│   ├── routes/             # React Router config
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html
├── package.json
├── vite.config.js
├── vercel.json            # Vercel deployment config
└── README.md
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **React Router DOM** | Client-side Routing |
| **Framer Motion** | Animations |
| **React Parallax Tilt** | 3D Card Effects |
| **CSS Variables** | Theming System |

---

## 🎯 Key Pages

### 1. **Landing Page** (`/`)
- Hero section with animated stats
- Quick links navigation
- Islamic hadith display
- Team structure tree
- Course selection cards

### 2. **Level 0** (`/level0`)
- Beginner-friendly topics
- Session videos and sheets
- Notion notes and PDFs
- Progress tracking

### 3. **Problem Solving Resources**
- **Sheets** (`/sheets`) - Curated Codeforces problem sets
- **Quizzes** (`/quizzes`) - Knowledge assessment
- **Contests** (`/contests`) - Competitive practice
- **Groups** (`/groups`) - Community links

### 4. **Guides**
- **Camp Details** (`/camp-details`) - Program overview
- **Camp Progress** (`/camp-progress`) - Current status
- **Codeforces Guide** (`/codeforces-guide`) - Platform tutorial
- **How to Solve** (`/how-to-solve`) - Problem-solving methodology
- **Newcomers Guide** (`/newcomers-guide`) - Getting started
- **ECPC** (`/ecpc`) - Contest preparation

---

## 🎨 Design System

### Color Palette

```css
--primary: #00F5FF      /* Cyan - Main accent */
--secondary: #7C7CFF    /* Purple - Secondary accent */
--accent: #FF6B9D       /* Pink - Special highlights */
--bg-main: #0B0F1A      /* Dark blue - Background */
```

### Typography

- **Display Font**: Cairo (Arabic-friendly)
- **Body Font**: Tajawal (Arabic-friendly)

### Effects

- **Glassmorphism**: Frosted glass backgrounds
- **Neon Glows**: Vibrant hover effects
- **Gradient Borders**: Animated color shifts
- **Parallax Tilt**: 3D card interactions

---

## 🌐 Deployment on Vercel

### Automatic Deployment

1. **Connect Repository**
   ```bash
   # Push to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📱 Features Breakdown

### Islamic Integration
- **Athkar Component**: Displays Islamic reminders every 2 minutes
- **Hadith Section**: Beautiful display of prophetic sayings
- **Arabic-First Design**: RTL support throughout

### Interactive Elements
- **Team Tree**: Visual hierarchy with LinkedIn integration
- **Animated Cards**: Hover effects and 3D tilting
- **Progress Bars**: Visual learning progress
- **Coming Soon Badges**: Upcoming features

### Educational Resources
- **25+ Sheets**: Comprehensive problem sets
- **Video Tutorials**: Step-by-step guides
- **Notion Integration**: Organized notes
- **PDF Downloads**: Offline learning materials

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Developer**: Eng. Amjad Ibrahim

- 📱 Phone: 01030615045
- 📧 Email: amjadibrahim218@gmail.com
- 💼 LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

**Instructor**: Mohamed Al-Qady

- 💼 LinkedIn: [Mohamed Al-Qady](https://www.linkedin.com/in/mohamedalkady-cp/)
- 📺 YouTube: Shfra Plus Channel

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Students**: 1500+ active learners
- **Mentors**: Dedicated teaching assistants
- **Community**: Telegram and Facebook groups
- **Inspiration**: Love for teaching and competitive programming

---

## 🔗 Quick Links

- 📚 [All Resources](https://linktr.ee/ShfraPlus)
- 💬 [Telegram Group](https://t.me/problemsolving2)
- 📘 [Facebook Group](https://www.facebook.com/share/g/1A7Mss5edV/)
- 🤖 [Telegram Bot](https://t.me/PSCampBot)

---

<div align="center">

**Built with 💙 using React, Vite, and a passion for education**

⭐ Star this repo if you find it helpful!

</div>