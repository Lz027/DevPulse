# DevPulse - APK Build Guide

## Overview

DevPulse is a web-based GitHub Activity Dashboard built with React + TypeScript. To create an APK for Android, we'll use **Capacitor**, which wraps your web app in a native Android shell.

## Method 1: Using Capacitor (Recommended)

Capacitor allows you to convert your React web app into a native Android APK with minimal changes.

### Prerequisites

1. **Node.js** (v16+) - Already installed
2. **Java Development Kit (JDK)** (v11+)
3. **Android SDK** 
4. **Android Studio** (optional, but recommended)

### Step 1: Install Capacitor

```bash
cd /home/ubuntu/DevPulse
npm install @capacitor/core @capacitor/cli
npm install @capacitor/android
```

### Step 2: Initialize Capacitor

```bash
npx cap init
```

When prompted, enter:
- **App name**: DevPulse
- **App ID**: com.devpulse.app
- **Directory**: dist (or leave blank, then manually set to dist)

### Step 3: Build Web Assets

```bash
npm run build
```

### Step 4: Add Android Platform

```bash
npx cap add android
```

This creates an `android/` folder with the native Android project.

### Step 5: Build APK

#### Option A: Using Gradle (Command Line)

```bash
cd android
./gradlew assembleDebug
```

The APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

#### Option B: Using Android Studio (GUI)

1. Open Android Studio
2. Open the `android/` folder as a project
3. Click **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
4. APK will be in `android/app/build/outputs/apk/debug/`

### Step 6: Install on Device

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Method 2: Using React Native Web + Expo (Alternative)

If you want to convert this to React Native:

### Step 1: Create Expo Project

```bash
npx create-expo-app DevPulseApp
cd DevPulseApp
npm install axios lucide-react-native
```

### Step 2: Rebuild Components for React Native

Convert React web components to React Native components (requires code changes).

### Step 3: Build APK with EAS

```bash
npm install -g eas-cli
eas login
eas build --platform android --type apk
```

---

## Method 3: Using PWA (Progressive Web App)

Convert your web app to a PWA and install directly on Android:

### Step 1: Add PWA Support

```bash
npm install workbox-webpack-plugin
```

### Step 2: Create Web Manifest

Create `public/manifest.json`:

```json
{
  "name": "DevPulse",
  "short_name": "DevPulse",
  "description": "GitHub Activity Dashboard",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#3b82f6",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Step 3: Install on Android

1. Open the web app in Chrome on Android
2. Tap the menu (⋮) → "Install app"
3. App installs as native app

---

## Recommended: Method 1 (Capacitor)

**Why Capacitor is best:**
- ✅ Minimal code changes needed
- ✅ Full native Android experience
- ✅ Access to device features (camera, storage, etc.)
- ✅ Can be published on Google Play Store
- ✅ Easier than setting up full React Native

---

## Quick Start Commands

### Build for Production

```bash
npm run build
```

### Initialize Capacitor

```bash
npx cap init
npx cap add android
```

### Build APK

```bash
cd android
./gradlew assembleDebug
```

### Install on Device

```bash
adb install android/app/build/outputs/apk/debug/app-debug.apk
```

---

## Troubleshooting

### Java Not Found
```bash
# Install Java
sudo apt-get install openjdk-11-jdk

# Set JAVA_HOME
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
```

### Gradle Build Fails
```bash
cd android
./gradlew clean
./gradlew assembleDebug
```

### APK Installation Fails
- Enable "Unknown Sources" in Android settings
- Check device storage space
- Ensure Android 5.0+ (API 21+)

---

## File Structure After Capacitor Setup

```
DevPulse/
├── src/                    # React source code
├── dist/                   # Built web assets
├── android/                # Native Android project
│   ├── app/
│   │   └── build/
│   │       └── outputs/
│   │           └── apk/
│   │               └── debug/
│   │                   └── app-debug.apk  ← Your APK!
├── capacitor.config.ts
├── package.json
└── vite.config.ts
```

---

## Publishing to Google Play Store

1. **Sign APK**
   ```bash
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 \
     -keystore my-release-key.keystore \
     app-release.apk alias_name
   ```

2. **Zipalign**
   ```bash
   zipalign -v 4 app-release.apk app-release-aligned.apk
   ```

3. **Upload to Google Play Console**
   - Create developer account
   - Upload signed APK
   - Fill in app details
   - Submit for review

---

## Support Resources

- **Capacitor Docs**: https://capacitorjs.com/docs
- **Android Development**: https://developer.android.com/
- **Vite Guide**: https://vitejs.dev/guide/
- **React Documentation**: https://react.dev/

---

**Next Steps:**
1. Install Java and Android SDK
2. Run `npx cap init` and `npx cap add android`
3. Build with `./gradlew assembleDebug`
4. Install APK on your device!

Good luck! 🚀
