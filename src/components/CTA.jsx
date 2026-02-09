import { Sparkles } from 'lucide-react'

const CTA = ({ onOpenWaitlist }) => {
    return (
        <section className="cta" id="cta">
            <div className="cta-container">
                <h2 className="cta-title">
                    Be the First to Experience<br />College Paglu
                </h2>
                <p className="cta-subtitle">
                    Join the waitlist and help us build the one super app every college student needs.
                </p>

                <div className="cta-buttons">
                    <button onClick={onOpenWaitlist} className="cta-btn cta-btn-white cta-btn-waitlist">
                        <Sparkles size={20} />
                        Join the Waitlist
                    </button>
                </div>
            </div>
        </section>
    )
}

export default CTA
