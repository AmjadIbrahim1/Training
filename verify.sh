#!/bin/bash

echo "🔍 Verifying Cyberpunk Tree App Setup..."
echo ""

# Check if package.json exists
if [ -f "package.json" ]; then
    echo "✅ package.json found"
else
    echo "❌ package.json missing"
    exit 1
fi

# Check critical directories
DIRS=("src" "src/components" "src/pages" "src/data" "public")
for dir in "${DIRS[@]}"; do
    if [ -d "$dir" ]; then
        echo "✅ Directory $dir exists"
    else
        echo "❌ Directory $dir missing"
    fi
done

# Check critical files
FILES=(
    "src/App.jsx"
    "src/main.jsx"
    "src/index.css"
    "src/assets/styles/variables.css"
    "src/components/tree/Tree.jsx"
    "src/components/tree/TreeNode.jsx"
    "src/components/landing/LandingCard.jsx"
    "src/data/treeData.js"
    "src/data/landingCards.js"
    "index.html"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ File $file exists"
    else
        echo "❌ File $file missing"
    fi
done

echo ""
echo "🎯 Next Steps:"
echo "1. Run: npm install"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
echo "✨ Done!"
