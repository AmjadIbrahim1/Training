# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### ❌ Issue: CSS @import Error
**Error Message:**
```
@import must precede all other statements
```

**Solution:**
Already fixed! The `@import` statements are now at the top of CSS files.

---

### ❌ Issue: Tree Component Not Showing

**Possible Causes & Solutions:**

#### 1. Check Console for Errors
Open Browser DevTools (F12) and check for JavaScript errors.

#### 2. Verify Data Structure
Make sure `src/data/treeData.js` has the correct structure:
```javascript
{
  roots: [
    {
      id: 'root1',
      name: 'Name',
      avatar: 'path/to/image.jpg',
      children: [...]
    }
  ]
}
```

#### 3. Check Image Paths
Avatar images might not exist. The code has a fallback to UI Avatars API, but check the network tab for 404 errors.

**Fix:** Images will automatically fallback to generated avatars if not found.

#### 4. Router Issues
Make sure you're navigating to `/level0` to see the tree.

---

### ❌ Issue: Cards Not Clickable

**Solution:**
Check if routes are properly defined in `src/routes/AppRoutes.jsx`

---

### ❌ Issue: Animations Not Working

**Possible Causes:**
1. Framer Motion not installed
2. Browser doesn't support animations

**Solution:**
```bash
npm install framer-motion react-parallax-tilt
```

---

### ❌ Issue: Styles Not Applied

**Solution:**
1. Clear browser cache (Ctrl + Shift + R / Cmd + Shift + R)
2. Restart dev server:
```bash
# Stop server (Ctrl + C)
npm run dev
```

---

### ❌ Issue: Module Not Found

**Error:** `Cannot find module 'framer-motion'`

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

### ❌ Issue: Port Already in Use

**Error:** `Port 5173 is already in use`

**Solution:**
```bash
# Kill the process using the port (on Mac/Linux)
lsof -ti:5173 | xargs kill

# Or change the port in vite.config.js
# Change: port: 5173 to port: 3000
```

---

## 🐛 Debugging Tips

### 1. Check Network Tab
- Open DevTools → Network
- Look for failed requests (red items)
- Check if CSS/JS files are loading

### 2. Check Console
- Look for React errors
- Check for undefined variables
- Verify component imports

### 3. Component Not Rendering?
Add console.log to debug:
```javascript
const TreeNode = ({ node }) => {
  console.log('TreeNode rendering:', node);
  // ... rest of component
}
```

### 4. Styles Not Working?
Check if CSS variables are defined:
```javascript
// In browser console
getComputedStyle(document.documentElement).getPropertyValue('--primary')
// Should return: #00F5FF
```

---

## 🚀 Quick Fixes

### Reset Everything:
```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Clear cache
rm -rf .vite

# 3. Restart
npm run dev
```

### Force Refresh:
- Chrome/Edge: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
- Firefox: Ctrl + F5 (Windows) / Cmd + Shift + R (Mac)

---

## 📞 Still Having Issues?

1. **Check Browser Console** for specific error messages
2. **Verify Node Version:** Should be v16 or higher
   ```bash
   node --version
   ```
3. **Check Package Versions:**
   ```bash
   npm list react react-dom framer-motion
   ```

---

## ✅ Expected Behavior

### Landing Page Should Show:
- ✓ Hero section with animated badge
- ✓ Stats with glowing numbers
- ✓ 4 cards in a grid (Level 0, Camp, Contests, Codeforces)
- ✓ Contests card with 🔥 badge
- ✓ Hover effects on cards

### Level 0 Page Should Show:
- ✓ Back button
- ✓ Header with "Level 0 Team Structure"
- ✓ Two teams side by side
- ✓ Glassmorphic cards with avatars
- ✓ Glow effects on hover
- ✓ Level badges

### All Pages Should Have:
- ✓ Smooth animations
- ✓ Cyberpunk color scheme (cyan, purple, magenta)
- ✓ Responsive design
- ✓ No console errors

---

**Last Updated:** 2026-01-30
