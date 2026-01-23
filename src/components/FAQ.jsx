import { useState } from 'react'
import { Plus } from 'lucide-react'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const faqs = [
        {
            question: 'Is CollegePaglu available for my college?',
            answer: 'We\'re rolling out to colleges across India! Currently live in 50+ campuses and adding more every week. Drop us a DM if you want us at your college—we\'ll prioritize based on demand.',
        },
        {
            question: 'How does CampusMart work?',
            answer: 'Post what you need (assignment, project, PPT), set your deadline and budget. Verified campus experts will bid on your work. Pick the one you vibe with, track progress, and get quality work delivered.',
        },
        {
            question: 'How do I pre-order canteen food?',
            answer: 'Open LazyPeeps, select your campus canteen, browse the menu, pick your time slot, and pay. Show up at your slot and skip the entire queue. Simple as that!',
        },
        {
            question: 'Is the Community section anonymous?',
            answer: 'Confessions and some posts can be anonymous—we respect privacy. But we moderate everything to keep it safe. No toxic stuff allowed.',
        },
        {
            question: 'What if I have issues with an order?',
            answer: 'We\'ve got your back! Hit up our support through the app—we respond within 24 hours. Refunds and resolutions are our priority.',
        },
    ]

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section className="faq" id="faq">
            <div className="faq-container">
                <div className="faq-header">
                    <p className="section-subtitle">Got Questions?</p>
                    <h2 className="section-title">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <span className="faq-icon">
                                    <Plus size={18} />
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-content">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
