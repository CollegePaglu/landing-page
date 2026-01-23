import { ArrowUpRight } from 'lucide-react'

const SlidingCards = () => {
    // Double the cards for seamless infinite scroll
    const cards = [
        { type: 'green-dark', icon: '👁️', title: 'View', subtitle: 'feature set' },
        { type: 'orange', icon: '📚', title: 'How it works', subtitle: 'Get started easily' },
        { type: 'beige', icon: '📝', title: 'Our blog', subtitle: 'Latest updates' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop' },
        { type: 'sage', icon: '⏰', title: 'View', subtitle: 'updates' },
        { type: 'orange', icon: '☕', title: 'LazyPeeps', subtitle: 'Skip the queue' },
        { type: 'beige', icon: '🎓', title: 'Community', subtitle: 'Connect now' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop' },
    ]

    // Duplicate for seamless scroll
    const allCards = [...cards, ...cards]

    return (
        <section className="sliding-cards-section">
            <div className="sliding-cards-container">
                {allCards.map((card, index) => {
                    if (card.type === 'image') {
                        return (
                            <div key={index} className="sliding-card image-card">
                                <img src={card.src} alt="Students" />
                            </div>
                        )
                    }

                    if (card.type === 'green-dark' || card.type === 'sage') {
                        return (
                            <div key={index} className={`sliding-card ${card.type}`}>
                                <span className="sliding-card-icon">{card.icon}</span>
                                <span className="sliding-card-title">{card.title}</span>
                                <span className="sliding-card-subtitle">{card.subtitle}</span>
                            </div>
                        )
                    }

                    return (
                        <div key={index} className={`sliding-card ${card.type}`} style={{ position: 'relative' }}>
                            <div className="sliding-card-arrow">
                                <ArrowUpRight size={14} />
                            </div>
                            <span className="sliding-card-icon">{card.icon}</span>
                            <span className="sliding-card-title">{card.title}</span>
                            <span className="sliding-card-subtitle">{card.subtitle}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SlidingCards
