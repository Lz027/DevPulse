import { useState } from 'react'
import { Flame, Search, BarChart3 } from 'lucide-react'
import TrendingRepos from './pages/TrendingRepos'
import DeveloperSearch from './pages/DeveloperSearch'
import LanguageStats from './pages/LanguageStats'
import './App.css'

type Tab = 'trending' | 'search' | 'languages'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('trending')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Flame className="logo-icon" />
            <h1>DevPulse</h1>
          </div>
          <p className="tagline">GitHub Activity Dashboard</p>
        </div>
      </header>

      <nav className="nav-tabs">
        <button
          className={`tab-button ${activeTab === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveTab('trending')}
        >
          <Flame size={20} />
          Trending Repos
        </button>
        <button
          className={`tab-button ${activeTab === 'search' ? 'active' : ''}`}
          onClick={() => setActiveTab('search')}
        >
          <Search size={20} />
          Developer Search
        </button>
        <button
          className={`tab-button ${activeTab === 'languages' ? 'active' : ''}`}
          onClick={() => setActiveTab('languages')}
        >
          <BarChart3 size={20} />
          Language Stats
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'trending' && <TrendingRepos />}
        {activeTab === 'search' && <DeveloperSearch />}
        {activeTab === 'languages' && <LanguageStats />}
      </main>
    </div>
  )
}

export default App
