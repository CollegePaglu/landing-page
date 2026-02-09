import { useState, useEffect } from 'react'
import { X, ChevronRight, ChevronLeft, Check, Loader2 } from 'lucide-react'

const WaitlistModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        college: '',
        year: '',
        branch: '',
        biggest_challenge: '',
        preferred_features: [],
        current_solution: '',
        beta_interest: '',
        primary_device: ''
    })

    const [errors, setErrors] = useState({})

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setStep(1)
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

    const colleges = [
        "IIT Bombay", "IIT Delhi", "IIT Madras", "IIT Kanpur", "IIT Kharagpur", "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad",
        "BITS Pilani", "BITS Goa", "BITS Hyderabad",
        "NIT Trichy", "NIT Warangal", "NIT Surathkal", "NIT Calicut", "NIT Rourkela",
        "IIIT Hyderabad", "IIIT Bangalore", "IIIT Delhi", "IIIT Allahabad",
        "Delhi Technological University (DTU)", "NSUT (NSIT)",
        "Jadavpur University", "Anna University", "Vellore Institute of Technology (VIT)",
        "Manipal Institute of Technology (MIT)", "SRM Institute of Science and Technology",
        "Thapar Institute of Engineering and Technology",
        "Amity University", "Lovely Professional University (LPU)", "Chandigarh University",
        "Jamia Millia Islamia", "Aligarh Muslim University", "Banaras Hindu University (BHU)",
        "University of Mumbai", "University of Delhi", "Christ University",
        "Symbiosis International", "NMIMS Mumbai",
        "Other"
    ]

    const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year / PhD', 'Alumni']

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

    const challengeOptions = [
        'Managing academics & grades',
        'Finding internships / jobs',
        'Accessing quality notes',
        'Attendance & Time management',
        'Socializing & events',
        'Mental health / stress',
        'Hostel / Accommodation issues',
        'Financial management'
    ]

    const featureOptions = [
        'Smart Study Planner',
        'Notes & PYQ Sharing',
        'Internship Opportunities',
        'Campus Events Feed',
        'Anonymous Confessions/Q&A',
        'Student Discounts',
        'Buy/Sell Marketplace',
        'Club Management'
    ]

    const solutionOptions = [
        'WhatsApp groups',
        'Asking seniors',
        'Google / YouTube',
        'College website/portal',
        'Multiple different apps',
        "I don't have a good solution"
    ]

    const betaOptions = ['Yes, I want early access! 🚀', 'Maybe later', 'No thanks']
    const deviceOptions = ['Android', 'iOS (iPhone)', 'Laptop / Desktop']

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const handleMultiSelectToggle = (field, option) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(option)
                ? prev[field].filter(item => item !== option)
                : [...prev[field], option]
        }))
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }))
        }
    }

    const validateStep1 = () => {
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

    const validateStep2 = () => {
        const newErrors = {}
        if (formData.biggest_challenge.length === 0) newErrors.biggest_challenge = 'Select at least one challenge'
        if (formData.preferred_features.length === 0) newErrors.preferred_features = 'Select at least one feature'
        if (!formData.current_solution) newErrors.current_solution = 'Select your current solution'
        if (!formData.beta_interest) newErrors.beta_interest = 'Select your interest'
        if (!formData.primary_device) newErrors.primary_device = 'Select your device'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleNext = () => {
        if (validateStep1()) {
            setStep(2)
        }
    }

    const handleBack = () => {
        setStep(1)
        setErrors({})
    }

    const handleSubmit = async () => {
        if (!validateStep2()) return

        setIsSubmitting(true)
        setError('')

        // Map UI values closer to schema if needed, or schema handles strings.
        // Schema expects 'Yes', 'Maybe', 'No' for beta_interest.
        // My new UI has longer strings. I should map them or update schema enum?
        // Updating schema is safer for API consistency, but Mapping here is easier.
        // Let's just Map here.
        const apiData = {
            ...formData,
            beta_interest: formData.beta_interest.startsWith('Yes') ? 'Yes' : (formData.beta_interest.startsWith('No') ? 'No' : 'Maybe'),
            primary_device: formData.primary_device.includes('Android') ? 'Android' : (formData.primary_device.includes('iOS') ? 'iOS' : 'Laptop / Web')
        }

        try {
            const response = await fetch('http://localhost:3001/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData)
            })

            const data = await response.json()

            if (data.success) {
                setIsSuccess(true)
            } else {
                setError(data.message || data.errors?.[0] || 'Something went wrong')
            }
        } catch (err) {
            setError('Failed to connect. Please try again.')
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
                        {/* Step Indicator */}
                        <div className="waitlist-steps">
                            <div className={`step ${step >= 1 ? 'active' : ''}`}>
                                <span className="step-number">1</span>
                                <span className="step-label">Details</span>
                            </div>
                            <div className="step-line" />
                            <div className={`step ${step >= 2 ? 'active' : ''}`}>
                                <span className="step-number">2</span>
                                <span className="step-label">Insights</span>
                            </div>
                        </div>

                        <h2 className="waitlist-title">
                            {step === 1 ? 'Join the Waitlist' : 'Quick Questions'}
                        </h2>
                        <p className="waitlist-subtitle">
                            {step === 1
                                ? 'Be among the first to experience College Paglu'
                                : 'Help us build what you actually need'
                            }
                        </p>

                        {error && <div className="waitlist-error">{error}</div>}

                        {step === 1 ? (
                            /* Step 1: Basic Details */
                            <div className="waitlist-form">
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
                                        list="colleges-list"
                                        type="text"
                                        placeholder="Search or type your college..."
                                        value={formData.college}
                                        onChange={e => handleInputChange('college', e.target.value)}
                                        className={errors.college ? 'error' : ''}
                                    />
                                    <datalist id="colleges-list">
                                        {colleges.map((college, index) => (
                                            <option key={index} value={college} />
                                        ))}
                                    </datalist>
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

                                <button className="waitlist-btn primary" onClick={handleNext}>
                                    Next <ChevronRight size={18} />
                                </button>
                            </div>
                        ) : (
                            /* Step 2: Student Insights */
                            <div className="waitlist-form">
                                <div className="form-group">
                                    <label>Biggest challenges in college? (Select all that apply) *</label>
                                    <div className="checkbox-group">
                                        {challengeOptions.map(opt => (
                                            <label key={opt} className={`checkbox-option ${formData.biggest_challenge.includes(opt) ? 'selected' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={formData.biggest_challenge.includes(opt)}
                                                    onChange={() => handleMultiSelectToggle('biggest_challenge', opt)}
                                                />
                                                <span>{opt}</span>
                                                {formData.biggest_challenge.includes(opt) && <Check size={14} />}
                                            </label>
                                        ))}
                                    </div>
                                    {errors.biggest_challenge && <span className="field-error">{errors.biggest_challenge}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Features you'd love to use? (Multiple allowed) *</label>
                                    <div className="checkbox-group">
                                        {featureOptions.map(opt => (
                                            <label key={opt} className={`checkbox-option ${formData.preferred_features.includes(opt) ? 'selected' : ''}`}>
                                                <input
                                                    type="checkbox"
                                                    checked={formData.preferred_features.includes(opt)}
                                                    onChange={() => handleMultiSelectToggle('preferred_features', opt)}
                                                />
                                                <span>{opt}</span>
                                                {formData.preferred_features.includes(opt) && <Check size={14} />}
                                            </label>
                                        ))}
                                    </div>
                                    {errors.preferred_features && <span className="field-error">{errors.preferred_features}</span>}
                                </div>

                                <div className="form-group">
                                    <label>How do you solve college problems now? *</label>
                                    <div className="radio-group compact">
                                        {solutionOptions.map(opt => (
                                            <label key={opt} className={`radio-option ${formData.current_solution === opt ? 'selected' : ''}`}>
                                                <input
                                                    type="radio"
                                                    name="solution"
                                                    checked={formData.current_solution === opt}
                                                    onChange={() => handleInputChange('current_solution', opt)}
                                                />
                                                <span>{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                    {errors.current_solution && <span className="field-error">{errors.current_solution}</span>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Want early beta access? *</label>
                                        <div className="radio-group inline">
                                            {betaOptions.map(opt => (
                                                <label key={opt} className={`radio-pill ${formData.beta_interest === opt ? 'selected' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        name="beta"
                                                        checked={formData.beta_interest === opt}
                                                        onChange={() => handleInputChange('beta_interest', opt)}
                                                    />
                                                    <span>{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.beta_interest && <span className="field-error">{errors.beta_interest}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label>Primary device? *</label>
                                        <div className="radio-group inline">
                                            {deviceOptions.map(opt => (
                                                <label key={opt} className={`radio-pill ${formData.primary_device === opt ? 'selected' : ''}`}>
                                                    <input
                                                        type="radio"
                                                        name="device"
                                                        checked={formData.primary_device === opt}
                                                        onChange={() => handleInputChange('primary_device', opt)}
                                                    />
                                                    <span>{opt}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {errors.primary_device && <span className="field-error">{errors.primary_device}</span>}
                                    </div>
                                </div>

                                <div className="waitlist-actions">
                                    <button className="waitlist-btn secondary" onClick={handleBack}>
                                        <ChevronLeft size={18} /> Back
                                    </button>
                                    <button
                                        className="waitlist-btn primary"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 size={18} className="spinner" /> Joining...</>
                                        ) : (
                                            'Join Waitlist 🚀'
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default WaitlistModal
