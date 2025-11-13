import { useState, useEffect } from 'react'
import { Loader } from 'lucide-react'
import axios from 'axios'
import '../styles/pages.css'

interface LanguageStat {
  language: string
  repos: number
  percentage: number
}

export default function LanguageStats() {
  const [stats, setStats] = useState<LanguageStat[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchLanguageStats()
  }, [])

  const fetchLanguageStats = async () => {
    try {
      setLoading(true)
      setError('')

      const languages = ['JavaScript', 'Python', 'TypeScript', 'Java', 'Go', 'Rust', 'C++', 'C#', 'PHP', 'Ruby']
      const stats: LanguageStat[] = []

      for (const lang of languages) {
        const response = await axios.get('https://api.github.com/search/repositories', {
          params: {
            q: `language:${lang} stars:>100`,
            per_page: 1,
          },
        })
        stats.push({
          language: lang,
          repos: response.data.total_count,
          percentage: 0,
        })
      }

      // Calculate percentages
      const total = stats.reduce((sum, s) => sum + s.repos, 0)
      stats.forEach((s) => {
        s.percentage = Math.round((s.repos / total) * 100)
      })

      // Sort by repos count
      stats.sort((a, b) => b.repos - a.repos)

      setStats(stats)
    } catch (err) {
      setError('Failed to fetch language statistics')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="spinner" />
        <p>Loading language statistics...</p>
      </div>
    )
  }

  const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316', '#6366f1', '#06b6d4']

  return (
    <div className="page-container">
      <div className="stats-container">
        <h2>Popular Programming Languages</h2>
        <div className="language-stats">
          {stats.map((stat, index) => (
            <div key={stat.language} className="language-stat-item">
              <div className="stat-header">
                <span className="language-name">{stat.language}</span>
                <span className="stat-percentage">{stat.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${stat.percentage}%`,
                    backgroundColor: colors[index % colors.length],
                  }}
                />
              </div>
              <p className="repo-count">{stat.repos.toLocaleString()} repositories</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
