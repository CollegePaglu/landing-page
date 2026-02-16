import { useState, useEffect } from 'react'
import './AdminDashboard.css'

const AdminDashboard = () => {
    const [authed, setAuthed] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [loginLoading, setLoginLoading] = useState(false)

    const [data, setData] = useState(null)
    const [totalVisits, setTotalVisits] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [filterYear, setFilterYear] = useState('')

    // Check if already logged in this session
    useEffect(() => {
        if (sessionStorage.getItem('admin_authed') === 'true') {
            setAuthed(true)
        }
    }, [])

    useEffect(() => {
        if (authed) fetchData()
    }, [authed])

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoginLoading(true)
        setLoginError('')
        try {
            const res = await fetch('/api/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })
            const json = await res.json()
            if (json.success) {
                sessionStorage.setItem('admin_authed', 'true')
                setAuthed(true)
            } else {
                setLoginError(json.message || 'Invalid credentials')
            }
        } catch {
            setLoginError('Failed to connect')
        } finally {
            setLoginLoading(false)
        }
    }

    const handleLogout = () => {
        sessionStorage.removeItem('admin_authed')
        setAuthed(false)
        setData(null)
    }

    const fetchData = async () => {
        setLoading(true)
        try {
            const [responsesRes, visitsRes] = await Promise.all([
                fetch('/api/responses'),
                fetch('/api/track-visit').catch(() => ({ json: async () => ({ count: 0 }) }))
            ])
            const json = await responsesRes.json()
            const visitsJson = await visitsRes.json()
            if (json.success) {
                setData(json.data)
            } else {
                setError(json.message || 'Failed to load')
            }
            setTotalVisits(visitsJson.count || 0)
        } catch {
            setError('Failed to connect to API')
        } finally {
            setLoading(false)
        }
    }

    const filteredResponses = data?.responses?.filter(r => {
        const matchesSearch = !search ||
            r.name.toLowerCase().includes(search.toLowerCase()) ||
            r.email.toLowerCase().includes(search.toLowerCase()) ||
            r.college.toLowerCase().includes(search.toLowerCase())
        const matchesYear = !filterYear || r.year === filterYear
        return matchesSearch && matchesYear
    }) || []

    // ── Login Screen ──
    if (!authed) {
        return (
            <div className="admin-page">
                <div className="login-container">
                    <div className="login-card">
                        <div className="login-icon">🔒</div>
                        <h2>Admin Access</h2>
                        <p className="login-subtitle">Enter credentials to view analytics</p>
                        {loginError && <div className="login-error">{loginError}</div>}
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                className="login-input"
                                autoFocus
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="login-input"
                                required
                            />
                            <button type="submit" className="login-btn" disabled={loginLoading}>
                                {loginLoading ? 'Verifying...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    // ── Loading ──
    if (loading) {
        return (
            <div className="admin-page">
                <div className="admin-loading">
                    <div className="admin-spinner" />
                    <p>Loading analytics...</p>
                </div>
            </div>
        )
    }

    // ── Error ──
    if (error) {
        return (
            <div className="admin-page">
                <div className="admin-error">
                    <h2>⚠️ Error</h2>
                    <p>{error}</p>
                    <button onClick={fetchData}>Retry</button>
                </div>
            </div>
        )
    }

    if (!data) return null

    const { overview, survey, colleges, years, branches } = data

    return (
        <div className="admin-page">
            <div className="admin-container">
                {/* Header */}
                <header className="admin-header">
                    <div>
                        <h1>User Analytics</h1>
                        <p className="admin-subtitle">CollegePaglu — Form Responses</p>
                    </div>
                    <div className="header-actions">
                        <button className="admin-refresh-btn" onClick={fetchData}>↻ Refresh</button>
                        <button className="admin-logout-btn" onClick={handleLogout}>Logout</button>
                    </div>
                </header>

                {/* Overview Cards */}
                <div className="admin-stats-grid">
                    <div className="admin-stat-card stat-visits">
                        <span className="stat-icon">🌐</span>
                        <div className="stat-info">
                            <span className="stat-number">{totalVisits.toLocaleString()}</span>
                            <span className="stat-label">Total Visits</span>
                        </div>
                    </div>
                    <div className="admin-stat-card stat-total">
                        <span className="stat-icon">👥</span>
                        <div className="stat-info">
                            <span className="stat-number">{overview.total}</span>
                            <span className="stat-label">Total Signups</span>
                        </div>
                    </div>
                    <div className="admin-stat-card stat-today">
                        <span className="stat-icon">📅</span>
                        <div className="stat-info">
                            <span className="stat-number">{overview.today}</span>
                            <span className="stat-label">Today</span>
                        </div>
                    </div>
                    <div className="admin-stat-card stat-week">
                        <span className="stat-icon">📊</span>
                        <div className="stat-info">
                            <span className="stat-number">{overview.week}</span>
                            <span className="stat-label">This Week</span>
                        </div>
                    </div>
                    <div className="admin-stat-card stat-beta">
                        <span className="stat-icon">🚀</span>
                        <div className="stat-info">
                            <span className="stat-number">
                                {survey.find(s => s.key === 'q6_beta_interest')?.percentage || 0}%
                            </span>
                            <span className="stat-label">Beta Interest</span>
                        </div>
                    </div>
                </div>

                {/* Survey Results */}
                <section className="admin-section">
                    <h2 className="section-title">📋 Survey Results</h2>
                    <div className="survey-grid">
                        {survey.map(s => (
                            <div className="survey-card" key={s.key}>
                                <div className="survey-label">{s.label}</div>
                                <div className="survey-bar-container">
                                    <div className="survey-bar-fill" style={{ width: `${s.percentage}%` }} />
                                </div>
                                <div className="survey-stats">
                                    <span className="survey-pct">{s.percentage}%</span>
                                    <span className="survey-count">{s.yes} yes / {s.no} no</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Demographics Grid */}
                <div className="admin-demo-grid">
                    <section className="admin-section">
                        <h2 className="section-title">🎓 By Year</h2>
                        <div className="demo-list">
                            {years.map(y => (
                                <div className="demo-item" key={y.name}>
                                    <span className="demo-name">{y.name}</span>
                                    <div className="demo-bar-container">
                                        <div className="demo-bar-fill year-fill" style={{ width: `${overview.total > 0 ? (y.count / overview.total) * 100 : 0}%` }} />
                                    </div>
                                    <span className="demo-count">{y.count}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="admin-section">
                        <h2 className="section-title">📚 Top Branches</h2>
                        <div className="demo-list">
                            {branches.map(b => (
                                <div className="demo-item" key={b.name}>
                                    <span className="demo-name">{b.name}</span>
                                    <div className="demo-bar-container">
                                        <div className="demo-bar-fill branch-fill" style={{ width: `${overview.total > 0 ? (b.count / overview.total) * 100 : 0}%` }} />
                                    </div>
                                    <span className="demo-count">{b.count}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="admin-section admin-colleges-section">
                        <h2 className="section-title">🏛️ Top Colleges</h2>
                        <div className="demo-list">
                            {colleges.map((c, i) => (
                                <div className="demo-item" key={c.name}>
                                    <span className="demo-rank">#{i + 1}</span>
                                    <span className="demo-name">{c.name}</span>
                                    <span className="demo-count college-count">{c.count}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Responses Table */}
                <section className="admin-section">
                    <div className="table-header">
                        <h2 className="section-title">📝 All Responses</h2>
                        <div className="table-controls">
                            <input
                                type="text"
                                placeholder="Search name, email, college..."
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                className="admin-search"
                            />
                            <select
                                value={filterYear}
                                onChange={e => setFilterYear(e.target.value)}
                                className="admin-select"
                            >
                                <option value="">All Years</option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                            </select>
                        </div>
                    </div>

                    <div className="admin-table-wrapper">
                        <table className="admin-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>College</th>
                                    <th>Year</th>
                                    <th>Branch</th>
                                    <th>Beta</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredResponses.length === 0 ? (
                                    <tr><td colSpan={8} className="empty-row">No responses found</td></tr>
                                ) : (
                                    filteredResponses.map((r, i) => (
                                        <tr key={r._id}>
                                            <td className="row-num">{i + 1}</td>
                                            <td className="cell-name">{r.name}</td>
                                            <td className="cell-email">{r.email}</td>
                                            <td>{r.college}</td>
                                            <td><span className="year-badge">{r.year}</span></td>
                                            <td>{r.branch}</td>
                                            <td>
                                                <span className={`beta-badge ${r.betaInterest ? 'yes' : 'no'}`}>
                                                    {r.betaInterest ? 'Yes' : 'No'}
                                                </span>
                                            </td>
                                            <td className="cell-date">
                                                {new Date(r.createdAt).toLocaleDateString('en-IN', {
                                                    day: 'numeric', month: 'short', year: 'numeric'
                                                })}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="table-footer">
                        Showing {filteredResponses.length} of {overview.total} responses
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AdminDashboard
