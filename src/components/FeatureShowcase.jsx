import { ArrowRight } from 'lucide-react'

const FeatureShowcase = () => {
    const features = [
        {
            icon: '📝',
            iconClass: 'purple',
            title: 'Easy Assignment Booking',
            description: 'Post your requirements within seconds. Browse by specialty, timeline, and availability.',
        },
        {
            icon: '📊',
            iconClass: 'green',
            title: 'Health Tracker',
            description: 'Log meals, attendance, and sleep with smart reminders that help you stay on track.',
        },
        {
            icon: '⚡',
            iconClass: 'orange',
            title: 'Instant',
            description: 'Skip the queue with instant canteen orders and printout bookings.',
        },
        {
            icon: '🔒',
            iconClass: 'purple',
            title: 'Secure & Encrypted',
            description: 'Your data is protected with end-to-end encryption and privacy-first design.',
        },
    ]

    return (
        <section className="feature-showcase" id="showcase">
            <div className="feature-showcase-container">
                <div className="feature-showcase-content">
                    <p className="section-subtitle">Why Choose Us</p>
                    <h2 className="section-title">
                        What Makes Us<br />Stand Out
                    </h2>
                    <p className="section-description" style={{ marginBottom: '32px', textAlign: 'left' }}>
                        Everything you need to simplify your college life, designed with students in mind.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className={`feature-item-icon ${feature.iconClass}`} style={{ background: feature.iconClass === 'purple' ? 'var(--accent-lavender)' : feature.iconClass === 'green' ? 'var(--mint-fresh)' : 'var(--accent-coral)' }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h4 className="feature-item-title">{feature.title}</h4>
                                    <p className="feature-item-desc">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="feature-showcase-phone">
                    <div className="phone-mockup main" style={{ transform: 'none' }}>
                        <div className="phone-notch"></div>
                        <div className="phone-screen">
                            <div className="phone-content" style={{ background: 'linear-gradient(180deg, #E3F2FD 0%, white 50%)' }}>
                                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                    <div style={{ width: '60px', height: '60px', background: 'var(--accent-lavender)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontSize: '28px' }}>
                                        📱
                                    </div>
                                    <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--forest-deep)' }}>CollegePaglu</div>
                                    <div style={{ fontSize: '12px', color: 'var(--forest-mid)' }}>Your campus companion</div>
                                </div>

                                <div className="phone-card" style={{ background: 'linear-gradient(135deg, var(--purple-main) 0%, var(--purple-dark) 100%)', border: 'none' }}>
                                    <div style={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>
                                        🎯 Today's Goals
                                    </div>
                                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', marginTop: '4px' }}>
                                        3 tasks completed
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.2)', height: '6px', borderRadius: '3px', marginTop: '12px' }}>
                                        <div style={{ background: 'white', height: '100%', width: '75%', borderRadius: '3px' }}></div>
                                    </div>
                                </div>

                                <div className="phone-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'var(--mint-fresh)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>☕</div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--forest-deep)' }}>Canteen Order</div>
                                            <div style={{ fontSize: '12px', color: 'var(--forest-mid)' }}>Ready for pickup</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="phone-card">
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', background: 'var(--accent-coral)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📚</div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--forest-deep)' }}>Assignment</div>
                                            <div style={{ fontSize: '12px', color: 'var(--forest-mid)' }}>In progress • Due tomorrow</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureShowcase
