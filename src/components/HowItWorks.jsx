import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HowItWorks = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.how-step', {
                scrollTrigger: {
                    trigger: '.how-steps',
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                opacity: 0,
                y: 60,
                stagger: 0.15,
                duration: 0.8,
                ease: 'back.out(1.7)',
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const steps = [
        {
            number: '1',
            title: 'Download & Sign Up',
            description: 'Quick college email verification. 30 seconds max, we promise.',
        },
        {
            number: '2',
            title: 'Explore Features',
            description: 'CampusMart for work, LazyPeeps for food, Community for vibes.',
        },
        {
            number: '3',
            title: 'Get Things Done',
            description: 'Post a request, order food, or join discussions. It\'s that simple.',
        },
        {
            number: '4',
            title: 'Live Your Best Life',
            description: 'More time for what matters. No more running around or deadline stress.',
        },
    ]

    return (
        <section className="how-it-works" id="how-it-works" ref={sectionRef}>
            <div className="how-container">
                <div className="how-header">
                    <p className="how-subtitle">Super easy setup</p>
                    <h2 className="how-title">
                        How It Works
                    </h2>
                </div>

                <div className="how-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="how-step">
                            <div className="how-step-number">{step.number}</div>
                            <h3 className="how-step-title">{step.title}</h3>
                            <p className="how-step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
