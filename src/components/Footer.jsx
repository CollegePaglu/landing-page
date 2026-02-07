import { Instagram, MessageCircle, Linkedin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            🎓 CollegePaglu
                        </div>
                        <p className="footer-description">
                            The all-in-one app for college students. One login. Complete campus life.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/collegepaglu.official/" target="_blank" rel="noopener noreferrer" className="footer-social-link"><Instagram size={24} /></a>
                            <a href="https://x.com/collegepaglu" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h.001Zm-1.161 17.52h1.833L7.084 4.126H5.117l12.166 15.644Z" />
                                </svg>
                            </a>
                            <a href="#" className="footer-social-link"><MessageCircle size={24} /></a>
                            <a href="#" className="footer-social-link"><Linkedin size={24} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">CampusMart</h4>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Buy & Sell Used Items</a>
                            <a href="#" className="footer-link">Second-hand Books</a>
                            <a href="#" className="footer-link">Student Freelancing</a>
                            <a href="#" className="footer-link">Assignments & Projects</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">LazyPeeps</h4>
                        <div className="footer-links">
                            <a href="#" className="footer-link">Canteen Pre-order</a>
                            <a href="#" className="footer-link">Printout App</a>
                            <a href="#" className="footer-link">Online Xerox</a>
                            <a href="#" className="footer-link">Stationery Delivery</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">Community</h4>
                        <div className="footer-links">
                            <a href="#" className="footer-link">College Notices</a>
                            <a href="#" className="footer-link">Internships</a>
                            <a href="#" className="footer-link">Student Discussions</a>
                            <a href="#" className="footer-link">Memes & Confessions</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">Support</h4>
                        <div className="footer-links">
                            <a href="#faq" className="footer-link">FAQ</a>
                            <a href="#" className="footer-link">Help Center</a>
                            <a href="#" className="footer-link">Contact Us</a>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} CollegePaglu. All rights reserved.
                    </p>
                    <p className="footer-made">
                        Made with <span className="heart">💚</span> for students
                    </p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
