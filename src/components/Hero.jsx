import { ArrowUpRight } from 'lucide-react'

// Custom SVG Icons for app theme
const AssignmentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
    </svg>
)

const CafeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
    </svg>
)

const CommunityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
)

const AIIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="7.5" cy="14.5" r="1.5" />
        <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
)

const MarketIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
)

const NotificationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
)

const Hero = () => {
    // Sliding cards data - app themed
    const slidingCards = [
        { type: 'sage-blob', icon: <AIIcon />, title: 'Smart Study', subtitle: 'Buddy' },
        { type: 'orange', icon: <AssignmentIcon />, title: 'Assignments', subtitle: 'Done Easy' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop' },
        { type: 'lavender', icon: <CafeIcon />, title: 'LazyPeeps', subtitle: 'Skip Queue' },
        { type: 'pink', icon: <MarketIcon />, title: 'CampusMart', subtitle: 'Buy & Sell' },
        { type: 'forest', icon: <CommunityIcon />, title: 'Community', subtitle: 'Connect' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop' },
        { type: 'mint', icon: <NotificationIcon />, title: 'Updates', subtitle: 'Stay Synced' },
    ]

    // Duplicate for infinite scroll
    const allCards = [...slidingCards, ...slidingCards]

    return (
        <section className="hero-wrapper">
            <div className="hero-container-bordered">
                {/* Navbar inside hero */}
                <nav className="hero-nav">
                    <a href="#" className="hero-nav-logo">
                        <img src="/collegepaglu%20logo%20-%20Edited.png" alt="CollegePaglu" className="logo-image" />
                    </a>

                    <div className="hero-nav-links">
                        <a href="#features" className="hero-nav-link">FEATURES</a>
                        <a href="#showcase" className="hero-nav-link">APP</a>
                        <a href="#faq" className="hero-nav-link">FAQ</a>
                        <a href="#" className="hero-nav-link">BLOG</a>
                    </div>

                    <div className="hero-nav-actions">
                        <a href="#" className="hero-nav-login">LOG IN</a>
                        <button className="hero-nav-signup">GET STARTED</button>
                    </div>
                </nav>

                {/* Main Typography */}
                <div className="hero-typography">
                    <h1 className="hero-headline">
                        <span className="hero-line">
                            <span className="hero-word">THE</span>
                            <span className="hero-bullet">•</span>
                            <span className="hero-word">ONE</span>
                            <span className="hero-bullet">•</span>
                            <span className="hero-word">SUPER</span>
                        </span>
                        <span className="hero-line">
                            <span className="hero-word">APP</span>
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face"
                                alt="Student"
                                className="hero-avatar green-border"
                            />
                            <span className="hero-word">EVERY</span>
                        </span>
                        <span className="hero-line">
                            <img
                                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
                                alt="Student"
                                className="hero-avatar sage-border"
                            />
                            <span className="hero-word">COLLEGE</span>
                            <span className="hero-bullet">•</span>
                            <span className="hero-word">STUDENT</span>
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face"
                                alt="Student"
                                className="hero-avatar orange-border"
                            />
                        </span>
                        <span className="hero-line">
                            <span className="hero-word">NEEDS</span>
                        </span>
                    </h1>

                    <p className="hero-tagline">Your campus life, simplified. Assignments, food, community — all in one app.</p>

                    <a href="#features" className="hero-handwritten">
                        (Download now↓)
                    </a>
                </div>

                {/* Infinite Sliding Cards Row */}
                <div className="hero-cards-wrapper">
                    <div className="hero-cards-track">
                        {allCards.map((card, index) => {
                            if (card.type === 'photo') {
                                return (
                                    <div key={index} className="slide-card photo-card">
                                        <img src={card.src} alt="Students" />
                                        <div className="photo-overlay"></div>
                                    </div>
                                )
                            }

                            return (
                                <div key={index} className={`slide-card ${card.type}-card`}>
                                    <div className="slide-card-arrow">
                                        <ArrowUpRight size={14} />
                                    </div>
                                    <div className="slide-card-icon">{card.icon}</div>
                                    <div className="slide-card-content">
                                        <span className="slide-card-title">{card.title}</span>
                                        <span className="slide-card-subtitle">{card.subtitle}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
