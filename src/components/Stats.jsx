import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, Building, PiggyBank, Star } from 'lucide-react'

const stats = [
    {
        icon: Users,
        value: 10000,
        suffix: '+',
        label: 'Active Students',
        color: 'indigo'
    },
    {
        icon: Building,
        value: 50,
        suffix: '+',
        label: 'Partner Colleges',
        color: 'orange'
    },
    {
        icon: PiggyBank,
        value: 21,
        suffix: 'L+',
        prefix: '₹',
        label: 'Money Saved',
        color: 'teal'
    },
    {
        icon: Star,
        value: 49,
        suffix: '',
        label: 'App Rating',
        decimal: true,
        color: 'pink'
    }
]

export default function Stats() {
    const numbersRef = useRef([])
    const sectionRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {
            numbersRef.current.forEach((el, index) => {
                if (!el) return

                const stat = stats[index]
                const target = stat.value
                const obj = { value: 0 }

                gsap.to(obj, {
                    value: target,
                    duration: 2.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    },
                    onUpdate: () => {
                        let displayValue
                        if (stat.decimal) {
                            displayValue = (obj.value / 10).toFixed(1)
                        } else {
                            displayValue = Math.floor(obj.value).toLocaleString()
                        }
                        el.textContent = `${stat.prefix || ''}${displayValue}${stat.suffix || ''}`
                    },
                    delay: index * 0.1
                })
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} className="stats" id="impact">
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon

                        return (
                            <div key={stat.label} className="stat-card">
                                <div className={`stat-icon ${stat.color}`}>
                                    <Icon size={28} />
                                </div>
                                <div
                                    ref={el => numbersRef.current[index] = el}
                                    className="stat-value"
                                >
                                    {stat.prefix || ''}0{stat.suffix || ''}
                                </div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
