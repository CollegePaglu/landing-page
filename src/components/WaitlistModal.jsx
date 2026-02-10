import { useState, useEffect } from 'react'
import { X, ChevronRight, Check, Loader2 } from 'lucide-react'
import confetti from 'canvas-confetti'
import './WaitlistModal.css'

const WaitlistModal = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        year: '',
        branch: '',
        q1_social_feed: false,
        q2_assignment_marketplace: false,
        q3_snacks_printouts: false,
        q4_society_updates: false,
        q5_campus_marketplace: false,
        q6_beta_interest: false,
        q7_mobile_preference: false
    })

    const [errors, setErrors] = useState({})

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setIsSuccess(false)
            setError('')
            setErrors({})
        }
    }, [isOpen])

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) onClose()
        }
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    }, [isOpen, onClose])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])



    const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year']

    const branchOptions = [
        'Computer Science (CSE)',
        'Information Technology (IT)',
        'Electronics & Comm. (ECE)',
        'Electrical (EEE)',
        'Mechanical',
        'Civil',
        'Chemical',
        'Aerospace',
        'Biotech',
        'Commerce / BBA',
        'Arts / Humanities',
        'Science (B.Sc/M.Sc)',
        'Law',
        'Medical (MBBS/BDS)',
        'Design / Architecture',
        'Other'
    ]

    const surveyQuestions = [
        { id: 'q1_social_feed', label: 'Would you use a social feed to connect with your college community?' },
        { id: 'q2_assignment_marketplace', label: 'Are you interested in buying/selling assignments through a marketplace?' },
        { id: 'q3_snacks_printouts', label: 'Would you buy snacks and send printouts online through the app?' },
        { id: 'q4_society_updates', label: 'Do you want official updates from college societies in one place?' },
        { id: 'q5_campus_marketplace', label: 'Would you use a platform to buy/sell items within your campus?' },
        { id: 'q6_beta_interest', label: 'Are you interested in joining a beta test for this app?' },
        { id: 'q7_mobile_preference', label: 'Would you prefer using this on your mobile device?' }
    ]

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const handleToggle = (field) => {
        setFormData(prev => ({ ...prev, [field]: !prev[field] }))
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email'
        if (!formData.college.trim()) newErrors.college = 'College is required'
        if (!formData.year) newErrors.year = 'Select your year'
        if (!formData.branch) newErrors.branch = 'Select your branch'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async () => {
        if (!validate()) return

        setIsSubmitting(true)
        setError('')

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (data.success) {
                setIsSuccess(true)
                // Trigger confetti blast
                const duration = 3000
                const end = Date.now() + duration

                const colors = ['#8BA888', '#3D5940', '#A8D5BA', '#E8E4DC']

                    ; (function frame() {
                        confetti({
                            particleCount: 3,
                            angle: 60,
                            spread: 55,
                            origin: { x: 0 },
                            colors: colors
                        })
                        confetti({
                            particleCount: 3,
                            angle: 120,
                            spread: 55,
                            origin: { x: 1 },
                            colors: colors
                        })

                        if (Date.now() < end) {
                            requestAnimationFrame(frame)
                        }
                    })()
            } else {
                setError(data.message || data.errors?.[0] || 'Something went wrong')
            }
        } catch (err) {
            console.error('Submission error:', err)
            setError('Failed to connect. Please check if the backend server is running.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (!isOpen) return null

    return (
        <div className="waitlist-modal-overlay" onClick={onClose}>
            <div
                className="waitlist-modal"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button className="waitlist-close-btn" onClick={onClose}>
                    <X size={20} />
                </button>

                {isSuccess ? (
                    /* Success State */
                    <div className="waitlist-success">
                        <div className="success-icon">🎉</div>
                        <h2>You're on the waitlist!</h2>
                        <p>We'll build College Paglu with students like you.</p>
                        <button className="waitlist-btn primary" onClick={onClose}>
                            Got it!
                        </button>
                    </div>
                ) : (
                    /* Form */
                    <>
                        <h2 className="waitlist-title">Join the Waitlist</h2>
                        <p className="waitlist-subtitle">
                            Be among the first to experience College Paglu
                        </p>

                        {error && <div className="waitlist-error">{error}</div>}

                        <div className="waitlist-form">
                            {/* Basic Details */}
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={e => handleInputChange('name', e.target.value)}
                                    className={errors.name ? 'error' : ''}
                                />
                                {errors.name && <span className="field-error">{errors.name}</span>}
                            </div>

                            <div className="form-group">
                                <label>Email Address *</label>
                                <input
                                    type="email"
                                    placeholder="your@college.edu"
                                    value={formData.email}
                                    onChange={e => handleInputChange('email', e.target.value)}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="field-error">{errors.email}</span>}
                            </div>

                            <div className="form-group">
                                <label>College Name *</label>
                                <input
                                    type="text"
                                    placeholder="Type your college name..."
                                    value={formData.college}
                                    onChange={e => handleInputChange('college', e.target.value)}
                                    className={errors.college ? 'error' : ''}
                                />
                                {errors.college && <span className="field-error">{errors.college}</span>}
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Current Year *</label>
                                    <select
                                        value={formData.year}
                                        onChange={e => handleInputChange('year', e.target.value)}
                                        className={errors.year ? 'error' : ''}
                                    >
                                        <option value="">Select Year</option>
                                        {yearOptions.map(y => (
                                            <option key={y} value={y}>{y}</option>
                                        ))}
                                    </select>
                                    {errors.year && <span className="field-error">{errors.year}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Branch / Major *</label>
                                    <select
                                        value={formData.branch}
                                        onChange={e => handleInputChange('branch', e.target.value)}
                                        className={errors.branch ? 'error' : ''}
                                    >
                                        <option value="">Select Branch</option>
                                        {branchOptions.map(b => (
                                            <option key={b} value={b}>{b}</option>
                                        ))}
                                    </select>
                                    {errors.branch && <span className="field-error">{errors.branch}</span>}
                                </div>
                            </div>

                            {/* Survey Questions */}
                            <div className="survey-section">
                                <h3 className="survey-title">Quick Survey</h3>
                                <p className="survey-subtitle">Help us understand what you need</p>

                                <div className="toggle-group">
                                    {surveyQuestions.map((question) => (
                                        <div
                                            key={question.id}
                                            className="toggle-item"
                                            onClick={() => handleToggle(question.id)}
                                        >
                                            <div className="toggle-label">
                                                <span className="toggle-text">{question.label}</span>
                                                <div
                                                    className={`toggle-switch ${formData[question.id] ? 'active' : ''}`}
                                                    aria-label={question.label}
                                                >
                                                    <span className="toggle-slider"></span>
                                                    <span className="toggle-state">
                                                        {formData[question.id] ? 'Yes' : 'No'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="waitlist-btn primary"
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <><Loader2 size={18} className="spinner" /> Joining...</>
                                ) : (
                                    <>Join Waitlist <ChevronRight size={18} /></>
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default WaitlistModal
