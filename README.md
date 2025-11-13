# DevPulse - GitHub Activity Dashboard

A beautiful, real-time GitHub Activity Dashboard built with React, TypeScript, and Vite. Discover trending repositories, search developer profiles, and explore programming language statistics.

## 🌟 Features

### 1. Trending Repositories
- View top GitHub repositories with 1000+ stars
- Filter by programming language (JavaScript, Python, TypeScript, Rust, Go, Java, C++, etc.)
- See detailed stats: Stars, Forks, Watchers, Language, Last Updated
- Direct links to repositories on GitHub

### 2. Developer Search
- Search any GitHub developer by username
- View detailed profiles with: Avatar, Bio, Location, Website
- Statistics: Public Repos, Followers, Following
- Direct link to GitHub profile

### 3. Language Statistics
- Discover the most popular programming languages on GitHub
- View repository counts and percentages
- Beautiful progress bars showing relative popularity
- Real-time data from GitHub API

## 🎨 Design

- **Dark Theme**: Beautiful slate/blue color scheme optimized for developers
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Smooth Animations**: Hover effects and transitions throughout
- **Modern UI**: Clean, professional interface with gradient backgrounds
- **Fast Performance**: Built with Vite for instant load times

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite (blazing fast)
- **Styling**: Custom CSS with modern gradients
- **API**: GitHub REST API (free, no authentication required)
- **Icons**: Lucide React
- **HTTP Client**: Axios

## 📦 Project Structure

```
DevPulse/
├── src/
│   ├── pages/
│   │   ├── TrendingRepos.tsx      # Trending repositories
│   │   ├── DeveloperSearch.tsx    # Developer profile search
│   │   └── LanguageStats.tsx      # Language statistics
│   ├── styles/
│   │   └── pages.css              # Page-specific styling
│   ├── App.tsx                    # Main app component
│   ├── App.css                    # App styling
│   ├── index.css                  # Global styles
│   └── main.tsx                   # Entry point
├── dist/                          # Production build
├── vite.config.ts                 # Vite configuration
├── tsconfig.json                  # TypeScript config
├── package.json                   # Dependencies
├── index.html                     # HTML template
└── README.md                      # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ (v22.13.0 available)
- npm 8+ (v10.9.2 available)

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd /home/ubuntu/DevPulse
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Local: http://localhost:3001/
   - Public: https://3001-ieylyd40iup0oicqgy4ca-c003b840.manus-asia.computer

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## 📱 Creating an APK

### Method 1: Using Capacitor (Recommended)

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# Initialize Capacitor
npx cap init

# Build web assets
npm run build

# Add Android platform
npx cap add android

# Build APK
cd android
./gradlew assembleDebug
```

APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

### Method 2: Using Expo

```bash
npm install -g eas-cli
eas login
eas build --platform android --type apk
```

### Method 3: Using PWA

Install directly on Android as a web app:
1. Open the web app in Chrome on Android
2. Tap menu (⋮) → "Install app"
3. App installs as native app

See `APK_BUILD_GUIDE.md` for detailed instructions.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📡 API Integration

The app uses the **GitHub REST API**:

- **Endpoint**: https://api.github.com
- **Rate Limit**: 60 requests/hour (unauthenticated)
- **No Authentication**: Uses public API, no credentials needed

### Example API Calls

```bash
# Search repositories
GET https://api.github.com/search/repositories?q=language:javascript&sort=stars

# Get user profile
GET https://api.github.com/users/{username}

# Search repositories by language
GET https://api.github.com/search/repositories?q=language:python
```

## 🎯 Key Features Explained

### Real-time Data
- All data is fetched live from GitHub API
- No caching, always up-to-date information
- Instant search results

### Error Handling
- Graceful error messages for failed requests
- Loading states for better UX
- Retry functionality

### Responsive Design
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📚 Documentation

- `APK_BUILD_GUIDE.md` - Detailed APK building instructions
- `README.md` - This file
- Source code comments for implementation details

## 🐛 Troubleshooting

### App won't load
- Check internet connection
- Clear browser cache
- Try in incognito mode

### API requests failing
- GitHub API might be rate-limited
- Wait a few minutes and try again
- Check GitHub status page

### Build errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## 📊 Performance

- **Build Size**: ~450 KB (gzipped: ~136 KB)
- **Load Time**: < 1 second
- **API Response**: < 1 second typically
- **Mobile Optimized**: Fast on 4G/5G

## 🔐 Privacy & Security

- No user authentication required
- No personal data collection
- No analytics or tracking
- Uses GitHub's public API
- All data stored in browser memory

## 🎓 Learning Resources

This project demonstrates:
- React best practices
- TypeScript usage
- Vite build optimization
- API integration
- Responsive design
- Error handling
- State management with hooks

## 📄 License

This project uses GitHub's public API which is free to use.

## 🤝 Contributing

Feel free to fork, modify, and improve this project!

## 📞 Support

For issues or questions:
- Check GitHub API documentation: https://docs.github.com/rest
- Vite documentation: https://vitejs.dev/
- React documentation: https://react.dev/

## 🎉 Credits

Built with:
- React 18
- TypeScript
- Vite
- Lucide React Icons
- Axios
- GitHub API

---

**Made with ❤️ for developers**

Visit the live app: https://3001-ieylyd40iup0oicqgy4ca-c003b840.manus-asia.computer
