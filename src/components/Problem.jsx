import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Problem = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.problem-card', {
                scrollTrigger: {
                    trigger: '.problem-grid',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 50,
                stagger: 0.1,
                duration: 0.7,
                ease: 'power3.out',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const problems = [
        {
            emoji: '😩',
            title: 'Deadline Anxiety',
            description: 'Assignment due tomorrow and you haven\'t started? Been there. WhatsApp "assignment wale bhaiya" left you on read again?',
        },
        {
            emoji: '⏰',
            title: 'Queue Life',
            description: 'Wasted 30 mins in canteen line just for a samosa. Then another 20 at the print shop. RIP your free period.',
        },
        {
            emoji: '🔍',
            title: 'Info Scattered Everywhere',
            description: 'Important notice? It\'s somewhere in those 47 WhatsApp groups. Exam date changed? Good luck finding that update.',
        },
        {
            emoji: '😶',
            title: 'Campus FOMO',
            description: 'That fest happened and you didn\'t know? Everyone\'s talking about something and you\'re out of the loop. Again.',
        },
    ]

    return (
        <section className="problem" ref={sectionRef}>
            <div className="problem-container">
                <div className="problem-header">
                    <p className="problem-subtitle">we get it fr fr</p>
                    <h2 className="problem-title">
                        College Life Hits Different.<br />
                        And Not Always Good.
                    </h2>
                    <p className="problem-description">
                        These struggles are too real. But what if there was one app that just... fixed it all?
                    </p>
                </div>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div key={index} className="problem-card">
                            <span className="problem-card-emoji">{problem.emoji}</span>
                            <h3 className="problem-card-title">{problem.title}</h3>
                            <p className="problem-card-description">{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problem
