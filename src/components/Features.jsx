import { ArrowRight } from 'lucide-react'

// Premium SVG Icons for Features
const AIAssistantIcon = () => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D5940" />
                <stop offset="100%" stopColor="#8BA888" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#ai-grad)" opacity="0.1" />
        <circle cx="24" cy="24" r="8" stroke="url(#ai-grad)" strokeWidth="3" fill="none" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="url(#ai-grad)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M10.3 10.3l5.7 5.7M32 32l5.7 5.7M10.3 37.7l5.7-5.7M32 16l5.7-5.7" stroke="url(#ai-grad)" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

const LazyPeepsIcon = () => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="cafe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8C42" />
                <stop offset="100%" stopColor="#FFB380" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#cafe-grad)" opacity="0.1" />
        <path d="M32 20h2a6 6 0 0 1 0 12h-2" stroke="url(#cafe-grad)" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 20h20v14a6 6 0 0 1-6 6h-8a6 6 0 0 1-6-6V20z" stroke="url(#cafe-grad)" strokeWidth="3" fill="none" />
        <path d="M16 8v6M22 8v6M28 8v6" stroke="url(#cafe-grad)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
)

const CampusMartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
        <defs>
            <linearGradient id="mart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8BA888" />
                <stop offset="100%" stopColor="#5F7A61" />
            </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="20" fill="url(#mart-grad)" opacity="0.1" />
        <circle cx="18" cy="38" r="3" stroke="url(#mart-grad)" strokeWidth="2.5" />
        <circle cx="34" cy="38" r="3" stroke="url(#mart-grad)" strokeWidth="2.5" />
        <path d="M8 10h6l4 20h20l4-14H16" stroke="url(#mart-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const Features = () => {
    const features = [
        {
            icon: <AIAssistantIcon />,
            title: "Smart Study Buddy",
            description: "Stuck on a problem? Get instant, smart help with your assignments. Upload, solving, learning—simplified.",
            link: "#",
            color: "green",
            stats: "10K+ Assignments Done"
        },
        {
            icon: <LazyPeepsIcon />,
            title: "LazyPeeps Food Ordering",
            description: "Skip the endless canteen queues. Order food, pay online, and just pick up. Your lunch break, reclaimed.",
            link: "#",
            color: "orange",
            stats: "Zero Queue Time"
        },
        {
            icon: <CampusMartIcon />,
            title: "CampusMart Marketplace",
            description: "Buy and sell used books, gadgets, and more within your campus. Safe, verified, and hassle-free student trading.",
            link: "#",
            color: "sage",
            stats: "5K+ Items Listed"
        }
    ]

    return (
        <section className="features-3d" id="features">
            {/* Background elements */}
            <div className="features-bg-orb features-bg-orb-1"></div>
            <div className="features-bg-orb features-bg-orb-2"></div>

            <div className="features-container">
                <div className="features-header">
                    <span className="features-label">Core Features</span>
                    <h2 className="features-title">
                        Everything You Need,<br />
                        <span className="text-gradient">One App.</span>
                    </h2>
                    <p className="features-subtitle">
                        Designed by students who understood the daily struggles. Built to make campus life effortless.
                    </p>
                </div>

                <div className="features-grid-3d">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card-3d ${feature.color}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            {/* 3D Glow effect */}
                            <div className="feature-glow"></div>

                            {/* Card content */}
                            <div className="feature-card-inner">
                                <div className="feature-icon-3d">
                                    {feature.icon}
                                </div>

                                <h3 className="feature-title-3d">{feature.title}</h3>
                                <p className="feature-desc-3d">{feature.description}</p>

                                <div className="feature-stats">
                                    <span className="feature-stats-badge">{feature.stats}</span>
                                </div>

                                <a href={feature.link} className="feature-link-3d">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} />
                                </a>
                            </div>

                            {/* Decorative corner */}
                            <div className="feature-corner"></div>
                        </div>
                    ))}
                </div>

                {/* Trust Banner */}
                <div className="features-trust">
                    <div className="trust-item">
                        <span className="trust-number">50K+</span>
                        <span className="trust-label">Active Students</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">100+</span>
                        <span className="trust-label">Colleges</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-number">4.9★</span>
                        <span className="trust-label">App Rating</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
