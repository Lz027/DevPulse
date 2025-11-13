import { useState, useEffect } from 'react'
import { Star, GitFork, Eye, Loader } from 'lucide-react'
import axios from 'axios'
import '../styles/pages.css'

interface Repository {
  id: number
  name: string
  full_name: string
  description: string
  url: string
  stars: number
  forks: number
  watchers: number
  language: string
  updated_at: string
}

export default function TrendingRepos() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [language, setLanguage] = useState('all')

  useEffect(() => {
    fetchTrendingRepos()
  }, [language])

  const fetchTrendingRepos = async () => {
    try {
      setLoading(true)
      setError('')

      const query = language === 'all' ? '' : `language:${language}`
      const response = await axios.get('https://api.github.com/search/repositories', {
        params: {
          q: `stars:>1000 ${query}`,
          sort: 'stars',
          order: 'desc',
          per_page: 20,
        },
      })

      const data = response.data.items.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description || 'No description',
        url: repo.html_url,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        language: repo.language || 'Unknown',
        updated_at: new Date(repo.updated_at).toLocaleDateString(),
      }))

      setRepos(data)
    } catch (err) {
      setError('Failed to fetch trending repositories')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <Loader className="spinner" />
        <p>Loading trending repositories...</p>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="filter-section">
        <label>Filter by Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="all">All Languages</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="typescript">TypeScript</option>
          <option value="rust">Rust</option>
          <option value="go">Go</option>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="repos-grid">
        {repos.map((repo) => (
          <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" className="repo-card">
            <div className="repo-header">
              <h3>{repo.name}</h3>
              <span className="language-badge">{repo.language}</span>
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-stats">
              <div className="stat">
                <Star size={16} />
                <span>{repo.stars.toLocaleString()}</span>
              </div>
              <div className="stat">
                <GitFork size={16} />
                <span>{repo.forks.toLocaleString()}</span>
              </div>
              <div className="stat">
                <Eye size={16} />
                <span>{repo.watchers.toLocaleString()}</span>
              </div>
            </div>
            <p className="repo-updated">Updated: {repo.updated_at}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
