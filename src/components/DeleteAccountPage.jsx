import { Trash2, AlertTriangle, HelpCircle, Mail } from 'lucide-react'
import './LegalPage.css' // Reusing LegalPage styles for consistency

const DeleteAccountPage = () => {
    return (
        <div className="legal-page">
            {/* Hero Section */}
            <section className="legal-hero">
                <div className="legal-hero-container">
                    <h1 className="legal-hero-title">Delete Your Account</h1>
                    <p className="legal-hero-subtitle">
                        We're sorry to see you go. Here's how to permanently delete your account and data from CollegePaglu.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="legal-content">
                <div className="legal-container">

                    <div className="legal-section">
                        <div className="legal-section-header">
                            <Trash2 size={32} style={{ color: 'var(--sage-main)' }} />
                            <h2>Account Deletion Request</h2>
                            <p className="legal-updated">Last Updated: February 19, 2026</p>
                        </div>

                        <div className="legal-text">
                            <p className="legal-intro">
                                If you wish to delete your CollegePaglu account, you have the right to request the permanent removal of your personal data. Please read the following information carefully before proceeding.
                            </p>

                            <div className="legal-highlight">
                                <AlertTriangle size={20} />
                                <p>
                                    <strong>Warning:</strong> Account deletion is permanent and cannot be undone. You will lose access to your profile, order history, posts, and any accumulated rewards or wallet balance.
                                </p>
                            </div>

                            <h3><span className="legal-number">1.</span> How to Delete Your Account</h3>
                            <p>
                                You can request account deletion directly through the CollegePaglu mobile application:
                            </p>
                            <ul>
                                <li>Open the <strong>CollegePaglu App</strong> on your device.</li>
                                <li>Go to <strong>Profile</strong> (tap on your profile picture).</li>
                                <li>Tap on <strong>Settings</strong> (gear icon).</li>
                                <li>Select <strong>Account Privacy</strong>.</li>
                                <li>Scroll down to the bottom and tap on <strong>Delete Account</strong>.</li>
                                <li>Follow the on-screen instructions to confirm your request.</li>
                            </ul>

                            <h3><span className="legal-number">2.</span> Data Retention & Deletion Timeline</h3>
                            <p>
                                Once your deletion request is confirmed:
                            </p>
                            <ul>
                                <li><strong>Immediate Action:</strong> Your account will be deactivated immediately. Your profile will no longer be visible to other users.</li>
                                <li><strong>Grace Period:</strong> We may retain your data for a grace period of 30 days in case you change your mind. You can reactivate your account by logging in during this period.</li>
                                <li><strong>Permanent Deletion:</strong> After the grace period, your personal information (name, email, phone number, bio) will be permanently deleted from our active databases.</li>
                            </ul>

                            <h3><span className="legal-number">3.</span> Data We May Retain</h3>
                            <p>
                                Some data may be retained for legal, security, or business operation purposes, even after account deletion:
                            </p>
                            <ul>
                                <li><strong>Transaction Records:</strong> We are legally required to retain records of financial transactions (e.g., CampusMart purchases) for tax and accounting purposes for a period of up to 7 years.</li>
                                <li><strong>Legal Compliance:</strong> Data required to comply with law enforcement requests or legal obligations.</li>
                                <li><strong>Anonymized Data:</strong> We may retain anonymized, aggregated data that cannot be linked back to you for analytical purposes.</li>
                            </ul>

                            <h3><span className="legal-number">4.</span> Third-Party Data</h3>
                            <p>
                                If you have used third-party services (e.g., payment gateways) through our app, they may retain your information according to their own privacy policies. We do not control their data retention practices.
                            </p>

                            <h3><span className="legal-number">5.</span> Need Help?</h3>
                            <p>
                                If you are unable to access the app or face any issues with the deletion process, you can contact our support team for manual assistance.
                            </p>

                            <ul className="legal-contact">
                                <li><strong>Email Support:</strong> <a href="mailto:support@collegepaglu.com">support@collegepaglu.com</a></li>
                                <li><strong>Subject Line:</strong> Please use the subject line "Account Deletion Request - 8595051170"</li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="legal-footer-cta">
                        <h3>Changed your mind?</h3>
                        <p>We'd love to have you stay!</p>
                        <a href="/" className="legal-cta-btn">
                            Return to Home
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default DeleteAccountPage
