import { ArrowUpRight, ClipboardList, Coffee, Users, Bot, Store, Bell, Sparkles } from 'lucide-react'
import WaitlistTimer from './WaitlistTimer'

const Hero = ({ onOpenWaitlist }) => {
    // Sliding cards data - app themed
    const slidingCards = [
        { type: 'sage-blob', icon: <Bot size={22} />, title: 'Smart Study', subtitle: 'Buddy' },
        { type: 'orange', icon: <ClipboardList size={22} />, title: 'Assignments', subtitle: 'Done Easy' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=300&fit=crop' },
        { type: 'lavender', icon: <Coffee size={22} />, title: 'LazyPeeps', subtitle: 'Skip Queue' },
        { type: 'pink', icon: <Store size={22} />, title: 'CampusMart', subtitle: 'Buy & Sell' },
        { type: 'forest', icon: <Users size={22} />, title: 'Community', subtitle: 'Connect' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop' },
        { type: 'mint', icon: <Bell size={22} />, title: 'Updates', subtitle: 'Stay Synced' },
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
                        <a href="#testimonials" className="hero-nav-link">REVIEWS</a>
                        <a href="#faq" className="hero-nav-link">FAQ</a>
                    </div>

                    <div className="hero-nav-actions">
                        <a href="#" className="hero-nav-login">LOG IN</a>
                        <button className="hero-nav-signup" onClick={onOpenWaitlist}>
                            JOIN WAITLIST
                        </button>
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

                    {/* Waitlist Timer */}
                    <WaitlistTimer />

                    {/* CTA Button */}
                    <button className="hero-waitlist-btn" onClick={onOpenWaitlist}>
                        <Sparkles size={18} />
                        Join the Waitlist
                    </button>
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
