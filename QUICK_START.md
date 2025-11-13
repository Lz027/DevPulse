# DevPulse - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Extract the ZIP
```bash
unzip DevPulse-Complete.zip
cd DevPulse
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open: http://localhost:3001/

### 4. Build for Production
```bash
npm run build
```

Output: `dist/` folder

## 📱 Create APK

### Quick Method: Using Capacitor

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize
npx cap init

# Build web
npm run build

# Add Android
npx cap add android

# Build APK
cd android
./gradlew assembleDebug
```

APK location: `android/app/build/outputs/apk/debug/app-debug.apk`

### Easy Method: Using Expo

```bash
npm install -g eas-cli
eas login
eas build --platform android --type apk
```

### Easiest Method: PWA

1. Open app in Chrome on Android
2. Tap menu (⋮) → "Install app"
3. Done!

## 📚 What's Included

- ✅ Complete React + TypeScript source code
- ✅ Beautiful dark theme UI
- ✅ GitHub API integration
- ✅ Trending repos, developer search, language stats
- ✅ Responsive design
- ✅ Production-ready build
- ✅ Comprehensive documentation

## 🎯 Features

### Trending Repositories
- View top GitHub repos with 1000+ stars
- Filter by language
- See stars, forks, watchers

### Developer Search
- Search any GitHub user
- View profile stats
- See followers, repos, location

### Language Statistics
- Most popular programming languages
- Repository counts
- Beautiful progress bars

## 📖 Documentation

- `README.md` - Full documentation
- `APK_BUILD_GUIDE.md` - Detailed APK instructions
- `QUICK_START.md` - This file

## 🔧 Commands

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
```

## 🌐 Live Demo

https://3001-ieylyd40iup0oicqgy4ca-c003b840.manus-asia.computer

## ❓ Need Help?

1. Check `README.md` for detailed info
2. See `APK_BUILD_GUIDE.md` for APK building
3. Visit GitHub API docs: https://docs.github.com/rest

## 💡 Tips

- App uses GitHub's public API (no auth needed)
- Works offline for cached data
- Responsive on all devices
- Fast with Vite build tool

---

**Happy coding! 🎉**
