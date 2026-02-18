import { ArrowLeft, Shield, FileText, Lock, Users, AlertCircle } from 'lucide-react'
import './LegalPage.css'


const LegalPage = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <div className="legal-page">
            {/* Hero Section */}
            <section className="legal-hero">
                <div className="legal-hero-container">

                    <h1 className="legal-hero-title">Legal Information</h1>
                    <p className="legal-hero-subtitle">
                        Your trust matters. Here's how we protect your data and ensure a safe campus experience.
                    </p>

                    {/* Quick Navigation */}
                    <div className="legal-nav-cards">
                        <button onClick={() => scrollToSection('terms')} className="legal-nav-card">
                            <FileText size={24} />
                            <span>Terms & Conditions</span>
                        </button>
                        <button onClick={() => scrollToSection('privacy')} className="legal-nav-card">
                            <Shield size={24} />
                            <span>Privacy Policy</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="legal-content">
                <div className="legal-container">

                    {/* TERMS AND CONDITIONS */}
                    <div id="terms" className="legal-section">
                        <div className="legal-section-header">
                            <FileText size={32} />
                            <h2>Terms and Conditions</h2>
                            <p className="legal-updated">Last Updated: February 16, 2026</p>
                        </div>

                        <div className="legal-text">
                            <p className="legal-intro">
                                Welcome to CollegePaglu! By accessing or using our platform (website, mobile application, and related services), you agree to be bound by these Terms and Conditions. Please read them carefully.
                            </p>

                            <h3><span className="legal-number">1.</span> Acceptance of Terms</h3>
                            <p>
                                By creating an account, accessing, or using CollegePaglu, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, along with our Privacy Policy. If you do not agree, please discontinue use immediately.
                            </p>

                            <h3><span className="legal-number">2.</span> Eligibility</h3>
                            <p>
                                CollegePaglu is exclusively available to students, faculty, and staff of registered educational institutions in India. You must:
                            </p>
                            <ul>
                                <li>Be at least 18 years old or have parental/guardian consent</li>
                                <li>Possess a valid college/university email address for verification</li>
                                <li>Provide accurate and complete registration information</li>
                                <li>Maintain the security and confidentiality of your account credentials</li>
                            </ul>

                            <h3><span className="legal-number">3.</span> Service Description</h3>
                            <p>
                                CollegePaglu is a comprehensive campus super app offering three core services:
                            </p>

                            <h4>3.1 CampusMart - Marketplace & Assignment Services</h4>
                            <ul>
                                <li><strong>Marketplace:</strong> A peer-to-peer platform for buying and selling second-hand items, books, electronics, and other student essentials</li>
                                <li><strong>Assignment Services:</strong> A platform connecting students with freelancers for academic assistance, project work, and assignment completion</li>
                                <li><strong>Role as Intermediary:</strong> CollegePaglu acts solely as an intermediary platform. We do not own, sell, or control any products or services listed by users. We are not party to transactions between buyers and sellers</li>
                                <li><strong>User Responsibility:</strong> Users are solely responsible for the accuracy of listings, quality of products/services, payment terms, and fulfillment of transactions</li>
                            </ul>

                            <h4>3.2 LazyPeeps - Food Ordering & Printing Services</h4>
                            <ul>
                                <li><strong>Canteen Pre-Order:</strong> Order food from campus canteens in advance to skip queues</li>
                                <li><strong>Printout Services:</strong> Submit documents for printing and collect them from campus print shops</li>
                                <li><strong>Third-Party Vendors:</strong> Food and printing services are provided by independent campus vendors. CollegePaglu is not responsible for food quality, preparation, delivery delays, or printing errors</li>
                                <li><strong>Payment Processing:</strong> Payments are processed securely through our platform. Refunds are subject to vendor policies and our refund guidelines</li>
                            </ul>

                            <h4>3.3 Anonymous Community</h4>
                            <ul>
                                <li><strong>Campus Social Feed:</strong> Share confessions, ask questions, post updates, and engage with your campus community</li>
                                <li><strong>Anonymity:</strong> Users may post anonymously, but all content is subject to our Community Guidelines</li>
                                <li><strong>Content Moderation:</strong> We reserve the right to remove content that violates our policies, including hate speech, harassment, misinformation, or illegal content</li>
                            </ul>

                            <h3><span className="legal-number">4.</span> User Conduct & Prohibited Activities</h3>
                            <p>You agree NOT to:</p>
                            <ul>
                                <li>Post false, misleading, or fraudulent listings or content</li>
                                <li>Engage in academic dishonesty or plagiarism through assignment services</li>
                                <li>Harass, bully, threaten, or defame other users</li>
                                <li>Share explicit, offensive, or illegal content</li>
                                <li>Violate intellectual property rights of others</li>
                                <li>Use automated bots, scrapers, or scripts to access the platform</li>
                                <li>Attempt to hack, disrupt, or compromise platform security</li>
                                <li>Sell prohibited items (weapons, drugs, counterfeit goods, etc.)</li>
                                <li>Impersonate others or create fake accounts</li>
                            </ul>

                            <h3><span className="legal-number">5.</span> Content Ownership & License</h3>
                            <p>
                                You retain ownership of all content you post on CollegePaglu (listings, reviews, posts, photos, etc.). However, by posting content, you grant CollegePaglu a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, distribute, and display your content for platform operation, marketing, and promotional purposes.
                            </p>
                            <p>
                                CollegePaglu reserves the right to remove, edit, or refuse any content that violates these Terms or our Community Guidelines.
                            </p>

                            <h3><span className="legal-number">6.</span> Payment Terms</h3>
                            <ul>
                                <li><strong>Transaction Fees:</strong> CollegePaglu may charge service fees or commissions on certain transactions (e.g., CampusMart sales, assignment services)</li>
                                <li><strong>Payment Methods:</strong> We support UPI, debit/credit cards, net banking, and digital wallets through secure third-party payment gateways</li>
                                <li><strong>Refunds:</strong> Refund eligibility depends on the nature of the transaction and vendor policies. Assignment services are generally non-refundable once work has commenced</li>
                                <li><strong>Disputes:</strong> Payment disputes should be reported within 7 days of the transaction. We will mediate but are not liable for resolution</li>
                            </ul>

                            <h3><span className="legal-number">7.</span> Disclaimers & Limitations of Liability</h3>
                            <p>
                                <strong>CollegePaglu is provided "AS IS" and "AS AVAILABLE" without warranties of any kind.</strong> We do not guarantee:
                            </p>
                            <ul>
                                <li>Accuracy, quality, or reliability of user-generated content or listings</li>
                                <li>Uninterrupted or error-free service</li>
                                <li>Security of data transmission over the internet</li>
                                <li>Quality of food, products, or services provided by third-party vendors</li>
                                <li>Academic outcomes from assignment services</li>
                            </ul>
                            <p>
                                <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, CollegePaglu, its founders, employees, and affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the platform, including but not limited to financial loss, data loss, or personal injury.
                            </p>

                            <h3><span className="legal-number">8.</span> Indemnification</h3>
                            <p>
                                You agree to indemnify and hold harmless CollegePaglu from any claims, damages, losses, or expenses (including legal fees) arising from:
                            </p>
                            <ul>
                                <li>Your violation of these Terms</li>
                                <li>Your use of the platform or services</li>
                                <li>Your content or listings</li>
                                <li>Your transactions with other users or vendors</li>
                            </ul>

                            <h3><span className="legal-number">9.</span> Account Suspension & Termination</h3>
                            <p>
                                We reserve the right to suspend or terminate your account at any time, without prior notice, if you:
                            </p>
                            <ul>
                                <li>Violate these Terms or our Community Guidelines</li>
                                <li>Engage in fraudulent or illegal activities</li>
                                <li>Receive multiple user complaints</li>
                                <li>Provide false information during registration</li>
                            </ul>
                            <p>
                                Upon termination, your access to the platform will be revoked, and any pending transactions may be canceled.
                            </p>

                            <h3><span className="legal-number">10.</span> Intellectual Property</h3>
                            <p>
                                All CollegePaglu branding, logos, designs, software, and platform features are the intellectual property of CollegePaglu and are protected by copyright, trademark, and other laws. You may not copy, modify, distribute, or reverse-engineer any part of our platform without written permission.
                            </p>

                            <h3><span className="legal-number">11.</span> Third-Party Links & Services</h3>
                            <p>
                                Our platform may contain links to third-party websites or integrate with third-party services (e.g., payment gateways, social media). We are not responsible for the content, privacy practices, or terms of these external services. Use them at your own risk.
                            </p>

                            <h3><span className="legal-number">12.</span> Modifications to Terms</h3>
                            <p>
                                CollegePaglu reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on our platform. Continued use of the platform after changes constitutes acceptance of the revised Terms.
                            </p>

                            <h3><span className="legal-number">13.</span> Governing Law & Dispute Resolution</h3>
                            <ul>
                                <li><strong>Governing Law:</strong> These Terms are governed by the laws of India</li>
                                <li><strong>Jurisdiction:</strong> Any disputes arising from these Terms or your use of CollegePaglu shall be subject to the exclusive jurisdiction of courts in [Your City], India</li>
                                <li><strong>Dispute Resolution:</strong> We encourage users to first contact us at <a href="mailto:legal@collegepaglu.com">legal@collegepaglu.com</a> to resolve disputes amicably before pursuing legal action</li>
                            </ul>

                            <h3><span className="legal-number">14.</span> Contact Information</h3>
                            <p>
                                For questions, concerns, or complaints regarding these Terms, please contact us:
                            </p>
                            <ul className="legal-contact">
                                <li><strong>Email:</strong> <a href="mailto:support@collegepaglu.com">support@collegepaglu.com</a></li>
                                <li><strong>Legal Inquiries:</strong> <a href="mailto:legal@collegepaglu.com">legal@collegepaglu.com</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* PRIVACY POLICY */}
                    <div id="privacy" className="legal-section">
                        <div className="legal-section-header">
                            <Shield size={32} />
                            <h2>Privacy Policy</h2>
                            <p className="legal-updated">Last Updated: February 16, 2026</p>
                        </div>

                        <div className="legal-text">
                            <p className="legal-intro">
                                At CollegePaglu, your privacy is our priority. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.
                            </p>

                            <div className="legal-highlight">
                                <AlertCircle size={20} />
                                <p>
                                    <strong>Key Principle:</strong> We collect only the data necessary to provide our services. We never sell your personal information to third parties for marketing purposes.
                                </p>
                            </div>

                            <h3><span className="legal-number">1.</span> Information We Collect</h3>

                            <h4>1.1 Information You Provide</h4>
                            <ul>
                                <li><strong>Account Information:</strong> Name, college email address, phone number, date of birth, gender, college/university name, course, year of study</li>
                                <li><strong>Profile Information:</strong> Profile photo, bio, interests, social media links (optional)</li>
                                <li><strong>Transaction Information:</strong> Payment details, order history, transaction records, delivery addresses</li>
                                <li><strong>User-Generated Content:</strong> Marketplace listings, assignment requests, community posts, reviews, ratings, photos, comments</li>
                                <li><strong>Communication Data:</strong> Messages, support tickets, feedback, and correspondence with us or other users</li>
                            </ul>

                            <h4>1.2 Information Collected Automatically</h4>
                            <ul>
                                <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
                                <li><strong>Usage Data:</strong> Pages viewed, features used, search queries, time spent on platform, click patterns, interaction logs</li>
                                <li><strong>Location Data:</strong> Precise GPS location (with your permission), IP address, Wi-Fi network information</li>
                                <li><strong>Cookies & Tracking:</strong> We use cookies, pixel tags, web beacons, and similar technologies to track user behavior and preferences</li>
                            </ul>

                            <h4>1.3 Information from Third Parties</h4>
                            <ul>
                                <li><strong>Social Media:</strong> If you sign up using Google or other social logins, we receive basic profile information</li>
                                <li><strong>Payment Gateways:</strong> Transaction confirmation and payment status from third-party payment processors</li>
                                <li><strong>Analytics Providers:</strong> Aggregated usage statistics from analytics tools</li>
                            </ul>

                            <h3><span className="legal-number">2.</span> How We Use Your Information</h3>
                            <p>We use your data to:</p>
                            <ul>
                                <li><strong>Provide Services:</strong> Facilitate marketplace transactions, process food orders, manage printouts, enable community interactions</li>
                                <li><strong>Account Management:</strong> Create and maintain your account, verify your college affiliation, authenticate logins</li>
                                <li><strong>Personalization:</strong> Customize your feed, recommend relevant products/services, tailor content to your interests</li>
                                <li><strong>Communication:</strong> Send order confirmations, transaction receipts, service updates, promotional offers (with consent), push notifications</li>
                                <li><strong>Security & Fraud Prevention:</strong> Detect and prevent fraudulent activities, spam, abuse, and policy violations</li>
                                <li><strong>Analytics & Improvement:</strong> Analyze usage patterns, conduct research, improve platform features, fix bugs</li>
                                <li><strong>Legal Compliance:</strong> Comply with legal obligations, respond to law enforcement requests, enforce our Terms</li>
                                <li><strong>Marketing:</strong> Send promotional emails, in-app notifications, and targeted advertisements (you can opt out anytime)</li>
                            </ul>

                            <h3><span className="legal-number">3.</span> How We Share Your Information</h3>
                            <p>We may share your information with:</p>

                            <h4>3.1 Other Users</h4>
                            <ul>
                                <li><strong>Marketplace Transactions:</strong> Your name, phone number, and delivery address are shared with buyers/sellers to facilitate transactions</li>
                                <li><strong>Assignment Services:</strong> Your requirements and contact details are shared with freelancers you engage</li>
                                <li><strong>Community Posts:</strong> Public posts are visible to all users; anonymous posts hide your identity but may be de-anonymized if you violate policies</li>
                            </ul>

                            <h4>3.2 Service Providers & Partners</h4>
                            <ul>
                                <li><strong>Campus Vendors:</strong> Canteen operators and print shops receive your order details and contact information</li>
                                <li><strong>Payment Processors:</strong> Razorpay, Paytm, or other gateways process your payment information securely</li>
                                <li><strong>Cloud Hosting:</strong> AWS, Google Cloud, or similar providers store our data securely</li>
                                <li><strong>Analytics Tools:</strong> Google Analytics, Firebase, or similar tools help us understand user behavior</li>
                                <li><strong>Communication Services:</strong> SMS, email, and push notification providers deliver messages on our behalf</li>
                            </ul>

                            <h4>3.3 Legal & Safety</h4>
                            <ul>
                                <li>Law enforcement or government authorities if required by law or to protect rights and safety</li>
                                <li>Legal advisors, auditors, or regulatory bodies as necessary</li>
                                <li>In case of a merger, acquisition, or sale of assets, your data may be transferred to the new entity</li>
                            </ul>

                            <h4>3.4 With Your Consent</h4>
                            <p>
                                We will not share your information for purposes other than those described above without your explicit consent.
                            </p>

                            <h3><span className="legal-number">4.</span> Data Security</h3>
                            <p>
                                We implement industry-standard security measures to protect your data, including:
                            </p>
                            <ul>
                                <li><strong>Encryption:</strong> Data is encrypted in transit (HTTPS/TLS) and at rest</li>
                                <li><strong>Access Controls:</strong> Only authorized personnel have access to personal data</li>
                                <li><strong>Regular Audits:</strong> We conduct security audits and vulnerability assessments</li>
                                <li><strong>Secure Payment Processing:</strong> Payment data is handled by PCI-DSS compliant processors</li>
                            </ul>
                            <p>
                                <strong>Important:</strong> While we take security seriously, no system is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
                            </p>

                            <h3><span className="legal-number">5.</span> Data Retention</h3>
                            <p>
                                We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                            </p>
                            <ul>
                                <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                                <li><strong>Deleted Accounts:</strong> Most data is deleted within 90 days of account deletion, except for data required for legal, tax, or fraud prevention purposes</li>
                                <li><strong>Transaction Records:</strong> Retained for 7 years to comply with Indian tax and accounting laws</li>
                                <li><strong>Anonymized Data:</strong> We may retain anonymized, aggregated data indefinitely for analytics</li>
                            </ul>

                            <h3><span className="legal-number">6.</span> Your Privacy Rights</h3>
                            <p>You have the following rights regarding your personal data:</p>
                            <ul>
                                <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
                                <li><strong>Correction:</strong> Update or correct inaccurate information in your profile settings</li>
                                <li><strong>Deletion:</strong> Request deletion of your account and associated data (subject to legal retention requirements)</li>
                                <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails or disable push notifications in app settings</li>
                                <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                                <li><strong>Withdraw Consent:</strong> Revoke consent for data processing where consent was the legal basis</li>
                            </ul>
                            <p>
                                To exercise these rights, contact us at <a href="mailto:privacy@collegepaglu.com">privacy@collegepaglu.com</a>.
                            </p>

                            <h3><span className="legal-number">7.</span> Cookies & Tracking Technologies</h3>
                            <p>
                                We use cookies and similar technologies to:
                            </p>
                            <ul>
                                <li><strong>Essential Cookies:</strong> Enable core functionality (login sessions, security)</li>
                                <li><strong>Analytics Cookies:</strong> Understand how users interact with our platform</li>
                                <li><strong>Advertising Cookies:</strong> Deliver personalized ads and measure campaign effectiveness</li>
                            </ul>
                            <p>
                                You can manage cookie preferences in your browser settings, but disabling cookies may affect platform functionality.
                            </p>

                            <h3><span className="legal-number">8.</span> Children's Privacy</h3>
                            <p>
                                CollegePaglu is intended for users aged 18 and above. If you are under 18, you must have parental or guardian consent to use our platform. We do not knowingly collect data from children under 13. If we discover such data, we will delete it immediately.
                            </p>

                            <h3><span className="legal-number">9.</span> Child Sexual Abuse and Exploitation</h3>
                            <div className="legal-highlight">
                                <AlertCircle size={20} />
                                <p>
                                    <strong>Zero-Tolerance Policy:</strong> CollegePaglu has a strict zero-tolerance policy against Child Sexual Abuse Material (CSAM) and any form of child sexual exploitation or abuse.
                                </p>
                            </div>
                            <p>
                                We are deeply committed to protecting children from harm and preventing the misuse of our platform for any form of child sexual abuse or exploitation. The following measures are in place:
                            </p>
                            <ul>
                                <li><strong>Strict Prohibition:</strong> The creation, upload, sharing, distribution, or promotion of Child Sexual Abuse Material (CSAM) or any content that sexually exploits, abuses, or endangers minors is <strong>strictly prohibited</strong> on our platform.</li>
                                <li><strong>Automated Detection:</strong> We employ automated detection systems (including PhotoDNA and similar technologies) and human moderation to proactively identify and remove such content before it can cause harm.</li>
                                <li><strong>Mandatory Reporting:</strong> Any detected CSAM is immediately reported to the <strong>National Center for Missing &amp; Exploited Children (NCMEC)</strong> via CyberTipline, and to appropriate Indian law enforcement agencies including the <strong>Cyber Crime Cell</strong>, in compliance with applicable laws.</li>
                                <li><strong>Immediate Account Termination:</strong> Any user found creating, sharing, or distributing such content will have their account <strong>permanently terminated</strong> without notice. We will preserve all relevant data to assist law enforcement investigations.</li>
                                <li><strong>No Grooming or Solicitation:</strong> Any attempt to use our platform to groom, solicit, or exploit minors is strictly prohibited and will be reported to authorities immediately.</li>
                                <li><strong>Report Abuse:</strong> If you encounter any content that sexually exploits or abuses a child, please report it immediately to <a href="mailto:safety@collegepaglu.com">safety@collegepaglu.com</a> or use the in-app report feature. You may also report directly to NCMEC at <a href="https://www.missingkids.org/gethelpnow/cybertipline" target="_blank" rel="noopener noreferrer">CyberTipline</a>.</li>
                            </ul>

                            <h3><span className="legal-number">10.</span> International Data Transfers</h3>
                            <p>
                                Your data is primarily stored and processed on servers located in India. If we transfer data outside India, we ensure adequate safeguards are in place to protect your information in accordance with applicable laws.
                            </p>

                            <h3><span className="legal-number">11.</span> Changes to This Privacy Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the platform after changes constitutes acceptance of the revised policy.
                            </p>

                            <h3><span className="legal-number">12.</span> Contact Us</h3>
                            <p>
                                For privacy-related questions, concerns, or requests, please contact us:
                            </p>
                            <ul className="legal-contact">
                                <li><strong>Email:</strong> <a href="mailto:privacy@collegepaglu.com">privacy@collegepaglu.com</a></li>
                                <li><strong>Data Protection Officer:</strong> <a href="mailto:dpo@collegepaglu.com">dpo@collegepaglu.com</a></li>
                                <li><strong>General Support:</strong> <a href="mailto:support@collegepaglu.com">support@collegepaglu.com</a></li>
                            </ul>

                            <div className="legal-highlight">
                                <Lock size={20} />
                                <p>
                                    <strong>Your Trust Matters:</strong> We're committed to transparency and protecting your privacy. If you have any concerns, we're here to help.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="legal-footer-cta">
                        <h3>Still have questions?</h3>
                        <p>Our support team is here to help</p>
                        <a href="mailto:support@collegepaglu.com" className="legal-cta-btn">
                            Contact Support
                        </a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default LegalPage
