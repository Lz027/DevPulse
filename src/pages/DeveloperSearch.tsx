import { useState } from 'react'
import { Users, MapPin, Link2, Calendar, Loader } from 'lucide-react'
import axios from 'axios'
import '../styles/pages.css'

interface Developer {
  login: string
  name: string
  avatar_url: string
  bio: string
  location: string
  blog: string
  public_repos: number
  followers: number
  following: number
  created_at: string
  profile_url: string
}

export default function DeveloperSearch() {
  const [username, setUsername] = useState('')
  const [developer, setDeveloper] = useState<Developer | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    try {
      setLoading(true)
      setError('')
      setDeveloper(null)

      const response = await axios.get(`https://api.github.com/users/${username}`)
      const data = response.data

      setDeveloper({
        login: data.login,
        name: data.name || data.login,
        avatar_url: data.avatar_url,
        bio: data.bio || 'No bio',
        location: data.location || 'Not specified',
        blog: data.blog || '',
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        created_at: new Date(data.created_at).toLocaleDateString(),
        profile_url: data.html_url,
      })
    } catch (err) {
      setError(`Developer "${username}" not found`)
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button" disabled={loading}>
          {loading ? <Loader className="spinner" /> : 'Search'}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {developer && (
        <div className="developer-card-large">
          <div className="developer-header">
            <img src={developer.avatar_url} alt={developer.name} className="avatar-large" />
            <div className="developer-info">
              <h2>{developer.name}</h2>
              <p className="username">@{developer.login}</p>
              <p className="bio">{developer.bio}</p>
            </div>
            <a href={developer.profile_url} target="_blank" rel="noopener noreferrer" className="view-profile-btn">
              View Profile
            </a>
          </div>

          <div className="developer-details">
            {developer.location && (
              <div className="detail-item">
                <MapPin size={18} />
                <span>{developer.location}</span>
              </div>
            )}
            {developer.blog && (
              <div className="detail-item">
                <Link2 size={18} />
                <a href={developer.blog} target="_blank" rel="noopener noreferrer">
                  {developer.blog}
                </a>
              </div>
            )}
            <div className="detail-item">
              <Calendar size={18} />
              <span>Joined {developer.created_at}</span>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value">{developer.public_repos}</div>
              <div className="stat-label">Public Repos</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">{developer.followers.toLocaleString()}</div>
              <div className="stat-label">Followers</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">{developer.following}</div>
              <div className="stat-label">Following</div>
            </div>
          </div>
        </div>
      )}

      {!developer && !error && !loading && (
        <div className="empty-state">
          <Users size={48} />
          <p>Search for a GitHub developer to see their profile</p>
        </div>
      )}
    </div>
  )
}
