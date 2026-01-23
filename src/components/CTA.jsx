import { Apple, Play } from 'lucide-react'

const CTA = () => {
    return (
        <section className="cta" id="cta">
            <div className="cta-container">
                <h2 className="cta-title">
                    Download CollegePaglu &<br />Take Control of Your Campus Life
                </h2>
                <p className="cta-subtitle">
                    Join 50,000+ students across 50+ colleges who are already living their best campus life.
                </p>

                <div className="cta-buttons">
                    <a href="#" className="cta-btn cta-btn-white">
                        <Apple size={20} />
                        App Store
                    </a>
                    <a href="#" className="cta-btn cta-btn-white">
                        <Play size={20} />
                        Google Play
                    </a>
                </div>
            </div>
        </section>
    )
}

export default CTA
