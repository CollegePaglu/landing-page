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
                            <a href="#" className="footer-social-link">📸</a>
                            <a href="#" className="footer-social-link">🐦</a>
                            <a href="#" className="footer-social-link">💬</a>
                            <a href="#" className="footer-social-link">💼</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">Product</h4>
                        <div className="footer-links">
                            <a href="#features" className="footer-link">Features</a>
                            <a href="#" className="footer-link">CampusMart</a>
                            <a href="#" className="footer-link">LazyPeeps</a>
                            <a href="#" className="footer-link">Community</a>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-links-title">Company</h4>
                        <div className="footer-links">
                            <a href="#" className="footer-link">About Us</a>
                            <a href="#" className="footer-link">Careers</a>
                            <a href="#" className="footer-link">Blog</a>
                            <a href="#" className="footer-link">Press Kit</a>
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
        </footer>
    )
}

export default Footer
