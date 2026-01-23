const Testimonials = () => {
    const testimonials = [
        {
            stars: '★★★★★',
            text: 'Got my entire major project done through CampusMart. The quality was insane and I actually understood the code. 10/10 would recommend.',
            name: 'Arjun K.',
            role: 'BTech CSE, 3rd Year',
            emoji: '👨‍💻',
        },
        {
            stars: '★★★★★',
            text: 'LazyPeeps saved my life during exams. Pre-ordered my canteen food and never had to wait in those insane queues again. Game changer!',
            name: 'Priya M.',
            role: 'BBA, 2nd Year',
            emoji: '👩‍🎓',
        },
        {
            stars: '★★★★★',
            text: 'The Community section is the best part. Finally one place for all campus updates, confessions are hilarious, and I feel connected now.',
            name: 'Rohit S.',
            role: 'MBA, 1st Year',
            emoji: '🧑‍💼',
        },
    ]

    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="section-title">
                        Real People. Real Results.
                    </h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-stars">{testimonial.stars}</div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                            <div className="testimonial-author">
                                <div className="testimonial-avatar">{testimonial.emoji}</div>
                                <div>
                                    <p className="testimonial-name">{testimonial.name}</p>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
