import { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'
import './WaitlistTimer.css'

const WaitlistTimer = ({ onOpen }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [isExpired, setIsExpired] = useState(false)

    useEffect(() => {
        const targetDate = new Date('2026-02-10T00:00:00')

        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = targetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
                setIsExpired(false)
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                setIsExpired(true)
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    // Check if timer is at zero
    const isAllZero = timeLeft.days === 0 && timeLeft.hours === 0 &&
        timeLeft.minutes === 0 && timeLeft.seconds === 0

    if (isExpired || isAllZero) {
        return (
            <div
                className="waitlist-wrapper celebration-mode"
                style={{ marginTop: '24px', marginBottom: '24px', position: 'relative', zIndex: 10 }}
            >
                {/* Ambient Background Glow */}
                <div className="ambient-glow-bg"></div>

                <div
                    className="celebration-container"
                    onClick={onOpen}
                    style={{ cursor: 'pointer' }}
                >
                    {/* Scarcity Badge */}
                    <div className="scarcity-badge">
                        <span className="badge-dot"></span>
                        Early Access Live
                    </div>

                    {/* 3D Glowing Orb with Particles */}
                    <div className="orb-container">
                        <div className="orb-glow"></div>
                        <div className="orb-core">
                            <span className="orb-emoji">😊</span>
                        </div>
                        <div className="orb-particle orb-particle-1"></div>
                        <div className="orb-particle orb-particle-2"></div>
                        <div className="orb-particle orb-particle-3"></div>
                        <div className="orb-particle orb-particle-4"></div>
                        <Sparkles size={20} className="sparkle-float sparkle-1" />
                        <Sparkles size={16} className="sparkle-float sparkle-2" />
                        <Sparkles size={18} className="sparkle-float sparkle-3" />
                    </div>

                    {/* Premium Text */}
                    <div className="celebration-text">
                        <h3 className="celebration-title">🚀 You're In!</h3>
                        <p className="celebration-subtitle">Early access is now open</p>
                    </div>

                    {/* Magnetic Button */}
                    <button className="celebration-cta-btn" onClick={onOpen}>
                        Join the Waitlist
                    </button>

                    {/* Social Proof */}
                    <div className="social-proof">
                        <span className="proof-item">⭐ Trusted by 1,200+ students</span>
                        <span className="proof-divider">•</span>
                        <span className="proof-item">👥 320 joined today</span>
                    </div>

                    {/* Glassmorphism Glow */}
                    <div className="celebration-glow"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="waitlist-wrapper">
            <div className="waitlist-label-row">
                <div className="live-dot"></div>
                <span>Waitlist Reveal</span>
            </div>

            <div className="waitlist-timer-pill">
                <div className="timer-unit">
                    <span className="timer-value">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="timer-label">DAYS</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-unit">
                    <span className="timer-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="timer-label">HRS</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-unit">
                    <span className="timer-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className="timer-label">MIN</span>
                </div>
                <div className="timer-divider">:</div>
                <div className="timer-unit">
                    <span className="timer-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className="timer-label">SEC</span>
                </div>
            </div>
        </div>
    )
}

export default WaitlistTimer
