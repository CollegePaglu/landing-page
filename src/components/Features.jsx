import { ArrowRight, Users, Coffee, Store } from 'lucide-react'

// Features with Styled Lucide Icons
const Features = () => {
    const features = [
        {
            icon: <Users size={32} strokeWidth={1.5} />,
            title: "Anonymous Community",
            description: "The heartbeat of your campus. Share confessions, ask questions anonymously, and find your tribe without the social pressure.",
            link: "#",
            color: "green",
            stats: "Active Campus Feed"
        },
        {
            icon: <Coffee size={32} strokeWidth={1.5} />,
            title: "LazyPeeps - Skip Canteen Queues",
            description: "The ultimate canteen pre-order app. Order food online, print documents from your phone, and skip the line entirely.",
            link: "#",
            color: "orange",
            stats: "Zero Queue Time"
        },
        {
            icon: <Store size={32} strokeWidth={1.5} />,
            title: "CampusMart & Assignments",
            description: "Buy & sell notes, gadgets, or outsource your assignments. The all-in-one marketplace for products and peer services.",
            link: "#",
            color: "sage",
            stats: "Products & Gigs"
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
