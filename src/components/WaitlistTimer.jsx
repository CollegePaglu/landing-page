import { useState, useEffect } from 'react'

const WaitlistTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

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
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

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
